import { NextResponse } from 'next/server';
import { auth } from '~/utils/auth';

export default auth(() => {
  // Handler logic ada di callbacks.authorized di auth config
  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
