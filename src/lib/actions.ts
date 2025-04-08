"use server"

import { cookies } from 'next/headers'

interface CookieData {
    name: string;
    value: string;
}

export async function setCookies({value, name}: CookieData): Promise<void> {
    const cookiesStore = await cookies();

    const cookieData = {
        name,
        value
    };

    cookiesStore.set(cookieData);
}