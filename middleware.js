// middleware.js (in the root of your project)
import { NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export function middleware(req) {
  const privateRoutes = ["/home", "/about"];
  const path = req.nextUrl.pathname;

  if (privateRoutes.includes(path)) {
    const isAuthenticated = getCookie("isAuthenticated", { req });
    console.log(isAuthenticated, "isAuthenticated in middleware");

    if (!isAuthenticated) {
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home", "/about"],
};
