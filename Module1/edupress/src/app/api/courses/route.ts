import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const courses = await prisma.course.findMany();
  return NextResponse.json(courses);
}

export async function POST(req: Request) {
  const data = await req.json();
  const course = await prisma.course.create({ data });
  return NextResponse.json(course);
}
