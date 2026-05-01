import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const device = await prisma.device.findUnique({
    where: { id },
    include: {
    logs: {
      orderBy: {
        timestamp: "desc"
      },
      take: 1
    },
    alerts: {
      where: {
        isRead: false
      }
    }
  }
  });

  if (!device) {
    return NextResponse.json(
      { error: "Device not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(device);
}