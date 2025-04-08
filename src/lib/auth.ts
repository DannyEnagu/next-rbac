import jwt from 'jsonwebtoken';
import { getUserPermissionsByRole } from './permissions';

const JWT_SECRET = process.env.JWT_SECRET as string;

export function getAuthToken(request: Request): { userId: string; role: string } | null {
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
        return null;
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; role: string };
    return decoded;
}

export async function isAuthorize(roleId: string, requiredPermission: string): Promise<boolean> {
    const userPermissions = await getUserPermissionsByRole(roleId);
    return userPermissions.includes(requiredPermission);
}