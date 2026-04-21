import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: data.password
    }
  });

  return NextResponse.json(user);
}

export async function GET() {
  const users = await prisma.user.findMany({
    include: {
      devices: true
    }
  });

  return NextResponse.json(users);
}