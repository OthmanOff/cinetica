import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret });

  // Redirect from /home to /home/discover
  if (req.nextUrl.pathname.startsWith("/home")) {
    if (token) {
      return NextResponse.redirect(new URL("/home/discover", req.url));
    }
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Redirect from / to /home if the user is authenticated
  if (req.nextUrl.pathname === "/") {
    if (token) {
      return NextResponse.redirect(new URL("/home", req.url));
    }
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Protect /home and ensure user is authenticated
  if (req.nextUrl.pathname.startsWith("/home")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Protect API routes and ensure user is authenticated
  if (req.nextUrl.pathname.startsWith("/api")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/movies/:path*", "/home", "/", "/api/shows/:path*"],
};
