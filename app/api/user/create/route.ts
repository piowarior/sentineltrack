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