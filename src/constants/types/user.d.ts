import { RoleName, User } from "@prisma/client";

export type Role = RoleName;

export type CreateUser = Pick<User, "name" | "email"  | "password"> & { role: 'CUSTOMER' | 'ADMIN' | 'MANAGER' | 'SALES_REP' | 'SUPPORT_STAFF' };