import { getAuthToken } from "@/lib/auth";
import { createPermission } from "@/lib/permissions";
import { isAdministrator, isValidPermissionName } from "@/lib/util";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const token = getAuthToken(request);
    if (!token) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }

    try {
        if (!isAdministrator(token.role)) {
            return NextResponse.json({ message: 'Access denied: Only Admins Can Create Permissions' }, { status: 403 });
        }
        const { name, description } = await request.json();

        if (!name || !description) {
            return NextResponse.json({message: 'Invalid permission name or description'}, { status: 400 })
        }

        if (!isValidPermissionName(name)) {
            return NextResponse.json({ message: 'Invalid permission format. Try [Category].[Role].[Action].[Object] formate' }, { status: 400 });
        }

        const permission = {
            action: name,
            description,
        }

        const newPermission = await createPermission(permission);
        return NextResponse.json({
            permission: newPermission,
            message: 'Permission created successfully',
        });
    } catch (error) {
        console.error(`❌ ${error} ❌`);
        return NextResponse.json({ message: (error as Error).message }, { status: 401 });
    }
}