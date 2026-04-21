import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const devices = await prisma.device.findMany({
    include: {
      logs: {
        orderBy: {
          timestamp: "desc"
        },
        take: 1 // ambil log terbaru saja
      }
    }
  });

  return NextResponse.json(devices);
}