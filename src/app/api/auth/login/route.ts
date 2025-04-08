import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { signInUser } from '@/lib/users';
import { getUserPermissionsByRole } from '@/lib/permissions';
import { setCookies } from '@/lib/actions';

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    const user = await signInUser({ email, password });
    const token = jwt.sign({userId: user.id, roleId: user.roleId, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

    const userPermissions = await getUserPermissionsByRole(user.roleId);

    await setCookies({
      name: 'token',
      value: token
    })

    return NextResponse.json({
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role.name, permissions: userPermissions },
      message: 'User signed in successfully',
    });
  } catch (error) {
    console.error(`❌ ${error} ❌`);
    return NextResponse.json({ message: (error as Error).message }, { status: 401 });
  }
}
