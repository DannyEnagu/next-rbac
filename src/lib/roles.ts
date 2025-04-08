import { RoleName } from "@prisma/client";
import prisma from "./prisma";

export const createRole = async ({name}: {name: RoleName}) => {
    const existing = await prisma.role.findUnique({ where: { name } });

    if (existing) {
        throw new Error('Role already exists');
    }

    const role = await prisma.role.create({ data: { name } });
    return role;
};