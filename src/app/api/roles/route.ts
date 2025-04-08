import { NextResponse } from 'next/server';
import { RoleName } from '@prisma/client';
import { getAuthToken } from '@/lib/auth';
import { createRole } from '@/lib/roles';


export async function POST(request: Request) {
    const token = getAuthToken(request);
    if (!token) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }
    
    try {
        // Only admins can create roles
        if (token.role !== 'ADMIN') {
            return NextResponse.json({ message: 'Access denied: Admins only' }, { status: 403 });
        }

        const roleName: RoleName = await request.json();

        const role = await createRole({ name: roleName });
        return NextResponse.json({ role, message: 'Role created successfully' });

    } catch (error) {
        console.error(`❌ ${error} ❌`);
        return NextResponse.json({ message: (error as Error).message }, { status: 400 });
    }
}