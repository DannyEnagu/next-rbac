// middleware.ts  
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';  
import { cookies } from 'next/headers';

const secret = new TextEncoder().encode(process.env.JWT_SECRET); 

export async function middleware(request: NextRequest ) {
  const { pathname } = request.nextUrl;
  const cookiesStore = await cookies()

  // Public Routes (no authentication required)
  if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
    return NextResponse.next();
  }

  // Get token from cookies
  const token = cookiesStore.get('token');

  // Check if the token exists
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // Verify token
    await jwtVerify(token.value, secret);

    return NextResponse.next(); // Token is valid, proceed

  } catch (error) {
    // Handle token verification errors (e.g., token expired)
    console.error('Token verification failed:', error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Protected Routes Configuration (AUTHENTICATION ONLY!)  
export const config = {  
  matcher: ['/dashboard/:path*'],  
};