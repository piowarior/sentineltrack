import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const device = await prisma.device.create({
    data: {
      name: data.name,
      secret: crypto.randomUUID(),
      userId: data.userId
    }
  });

  return NextResponse.json(device);
}

export async function GET() {

  const devices = await prisma.device.findMany({
    include: {
      logs: true
    }
  });

  return NextResponse.json(devices);
}