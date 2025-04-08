import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ message: 'ECO/SAAS NEXT RBAC is up and running...' });
}