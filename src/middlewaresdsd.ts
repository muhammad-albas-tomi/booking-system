// import { NextResponse } from 'next/server';
// import { pathRBACMe } from './components/(panel)/rbac';
// import { auth } from './utils/auth';

// const redirect = (path: string, url: URL) => {
//   return NextResponse.redirect(new URL(path, url));
// };

// export default auth((req) => {
//   const { nextUrl } = req;

//   const currentPath = req.nextUrl.pathname;
//   const signInPath = '/auth/login';
//   const defaultRedirectPathWhenSignedIn = '/dashboard';

//   /**
//    * Redirect to signInPath if user is tries to access '/'
//    */
//   if (currentPath === '/') {
//     return NextResponse.redirect(new URL(signInPath, req.url));
//   }

//   /**
//    * Protect all routes that start with the protectedPaths.
//    */
//   const protectedPaths = [
//     '/dashboard',
//     '/settings',
//     '/outsource',
//     '/hris',
//     '/report',
//     '/payroll',
//     '/profile',
//   ];

//   if (protectedPaths.some((path) => currentPath.startsWith(path))) {
//     if (!req.auth) {
//       return NextResponse.redirect(new URL(signInPath, req.url));
//     }
//   }

//   /**
//    * Redirect to dashboard if user is authenticated and tries to access the signInPath.
//    */
//   if (currentPath === signInPath && req.auth !== null) {
//     return NextResponse.redirect(
//       new URL(defaultRedirectPathWhenSignedIn, req.url),
//     );
//   }

//   const profile = req.auth?.profile;

//   if (
//     protectedPaths.some((path) => currentPath.startsWith(path)) &&
//     profile?.permissions
//   ) {
//     const hasPermissions = profile.permissions;
//     const path = currentPath;

//     const isValid = pathRBACMe(path, hasPermissions);

//     if (!isValid) {
//       return redirect('/dashboard', nextUrl);
//     }
//   }

//   return NextResponse.next();
// });

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };
