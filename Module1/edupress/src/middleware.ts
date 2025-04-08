import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // Chỉ kiểm tra token tồn tại
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}
