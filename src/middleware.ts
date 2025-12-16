import { NextRequest, NextResponse } from 'next/server';
import { ROLES } from './constants/roles';
import { auth } from './utils/auth';

const protectRoute = ['/hotels', '/bookings', '/admin', '/my-reservations'];

export async function middleware(req: NextRequest) {
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const role = session?.user?.role;
  const { pathname } = req.nextUrl;

  if (!isLoggedIn && protectRoute.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (isLoggedIn && protectRoute.includes(pathname)) {
    if (role !== ROLES.ADMIN && pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Add logic to protect routes here if needed
  // For now, just allow all requests
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
