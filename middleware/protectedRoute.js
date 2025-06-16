import { NextResponse } from "next/server";

export function middleware(request) {
  const encodedRole = request.cookies.get("role")?.value;
  const pathname = request.nextUrl.pathname;

  // Decode and split the role string safely
  const decodedRoleString = decodeURIComponent(encodedRole || "");
  const roles = decodedRoleString.split(", ").map((role) => role.toUpperCase());

  if (pathname.startsWith("/admin") && !roles.includes("BISHAL")) {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  if (pathname.startsWith("/merchant") && !roles.includes("MERCHANT")) {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  if (pathname.startsWith("/user") && !roles.includes("USER")) {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/merchant/:path*", "/user/:path*"],
};
