import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !user.password || !bcrypt.compare(password, user.password)) {
    return NextResponse.json(
      { message: "Sai tài khoản hoặc mật khẩu" },
      { status: 401 }
    );
  }

  const token = await jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });

  const response = NextResponse.json({ message: "Đăng nhập thành công" });
  response.cookies.set("token", token, { httpOnly: true, secure: true });
  return response;
}
