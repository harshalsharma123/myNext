// middleware.js (in the root of your project)
import { NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export function middleware(req) {
  const privateRoutes = ["/dashboard", "/profile", "/settings"];
  const path = req.nextUrl.pathname;

  if (privateRoutes.includes(path)) {
    const isAuthenticated = getCookie("isAuthenticated", { req });

    if (!isAuthenticated) {
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/profile", "/settings"],
};
