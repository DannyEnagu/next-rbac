import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { CreateUser } from '@/constants/types/user';
import { ROLES } from '@/constants/static';

export async function createUser({name, email, password, role}: CreateUser) {
  const existing = await prisma.user.findUnique({ where: { email } });
  
  if (existing) {
    throw new Error('User already exists');
  }

  if (!ROLES.includes(role)) {
    throw new Error(`Invalid Role Name: ${role}. Valid Roles are: ${ROLES.join(', ')}`);
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashed,
    role: { connect: { name: role } } },
    include: { 
      role: { include: { permissions: true } },
    },
  });

  return user;
}

export async function signInUser({email, password}: {email: string; password: string}) {
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      role: {
        include: {
          permissions: true,
          childRoles: {
            include: {
              permissions: true,
            }
          }
        },
      }
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    throw new Error('Invalid password');
  }

  return user;
}
