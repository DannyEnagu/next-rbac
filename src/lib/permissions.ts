import prisma from "./prisma";

interface RoleWithPermissions {
    permissions: { action: string }[];
    parentRole: RoleWithPermissions | null;
}

export async function createPermission(permission: { action: string, description: string }) {
    return await prisma.permission.create({ data: permission });
}

export async function updatePermission(id: string, permission: { action: string, description: string }) {
    return await prisma.permission.update({ where: { id }, data: permission });
}

// export async function assignPermissionToRole(roleId, permissionId) {
    
// }

export async function deletePermission(id: string) {
    return await prisma.permission.delete({ where: { id } });
}

export async function getUserPermissionsByRole(roleId: string): Promise<string[]> {
    // Retrieve the role's direct permissions and all child permissions
    const role = await prisma.role.findUnique({
        where: { id: roleId },
        include: {
            // Admin's direct permissions
            permissions: true,
            parentRole: {
                include: {
                    // Manager's permissions (Admin's child permissions)
                    permissions: true,
                    parentRole: {
                        include: {
                            // Sales Rep's permissions (Manager's child permissions)
                            permissions: true,
                            parentRole: {
                                include: {
                                    // Employee's permissions (Sales Rep's child permissions)
                                    permissions: true, 
                                    parentRole: {
                                        // Customer's permissions (Employee's child permissions)
                                        include: {
                                            permissions: true, 
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
    });

    if (!role) {
        throw new Error('Role not found');
    }

    const permissions = new Set<string>();
    let currentRole: RoleWithPermissions | null = role;

    while (currentRole) {
        currentRole.permissions.forEach((p) => permissions.add(p.action));
        currentRole = currentRole.parentRole;
    }

    return Array.from(permissions);
}
