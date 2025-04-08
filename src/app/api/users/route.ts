import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { createUser } from '@/lib/users';
import { getAuthToken } from '@/lib/auth';
import { getUserPermissionsByRole } from '@/lib/permissions';
import { isAdministrator } from '@/lib/util';

export async function POST(request: Request) {
  const token = getAuthToken(request);
  if (!token) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }

  try {
    if (!isAdministrator(token.role)) {
      return NextResponse.json({ message: 'Access denied: Admins only' }, { status: 403 });
    }
    const { name, email, password, role } = await request.json();

    // Only allow creating users with roles other than CUSTOMER and ADMIN via this route
    if (!['MANAGER', 'SALES_REP', 'SUPPORT_STAFF'].includes(role)) {
      return NextResponse.json({ message: 'Invalid role for creation!' }, { status: 400 });
    }

    const user = await createUser({ name, email, password, role });

    const userPermissions = await getUserPermissionsByRole(user.roleId);

    return NextResponse.json({
      user: { id: user.id, name: user.name, email: user.email, role: user.role.name, permissions: userPermissions },
      message: 'User created successfully',
    });
  } catch (err) {
    const error = err as Error | jwt.JsonWebTokenError;
    console.error(`❌ ${err} ❌`);

    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
