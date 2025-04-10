import { NextResponse } from 'next/server';
import { createUser } from '@/lib/users';
import jwt from 'jsonwebtoken';
import { CreateUser } from '@/constants/types/user';
import { getUserPermissionsByRole } from '@/lib/permissions';
import { setCookies } from '@/lib/actions';

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(request: Request) {
    const { name, email, password, role } = await request.json();
    const data: CreateUser = { name, email, password, role };
    
    try {
        const user = await createUser(data);
        const token = jwt.sign({userId: user.id, roleId: user.roleId, role: user.role.name }, JWT_SECRET, { expiresIn: '24h' });
        const userPermissions = await getUserPermissionsByRole(user.roleId);
        await setCookies({
            name: 'token',
            value: token
        })
        return NextResponse.json({
            token,
            user: { id: user.id, name: user.name, email: user.email, role: user.role.name, permissions: userPermissions },
            message: 'User created successfully',
        });
    } catch (err) {
        console.error(`❌ ${err} ❌`);
        return NextResponse.json(
        { message: `${err}` },
        { status: 400 }
        );
    }
}
