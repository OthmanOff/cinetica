import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
    const token = await getToken({req,secret});

    if (req.nextUrl.pathname==="/"){
        if (token)
            {
                return NextResponse.redirect(new URL("/home",req.url));
            }
    }
    if (req.nextUrl.pathname.startsWith("/home"))
    {
        if (!token)
            {
                return NextResponse.redirect(new URL("/",req.url));
            }
    }
    if(req.nextUrl.pathname.startsWith("/api")){
        console.log("api")
        if (!token)
            {
                return NextResponse.redirect(new URL("/",req.url));
            }
    }
    return NextResponse.next();
}
   
export const config = {
    matcher: ['/api/movies/:path*','/home','/','/api/shows/:path*'],
  }
;