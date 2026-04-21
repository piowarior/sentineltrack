import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const data = await req.json() as {
    secret: string;
    ip: string;
    city: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
  };

  // 1. validasi device pakai secret
  const device = await prisma.device.findUnique({
    where: {
      secret: data.secret
    }
  });

  if (!device) {
    return NextResponse.json(
      { error: "Unauthorized device" },
      { status: 401 }
    );
  }

  // 2. simpan log (PAKAI device.id, BUKAN secret)
  const log = await prisma.deviceLog.create({
    data: {
      deviceId: device.id,  // ✅ INI YANG BENAR
      ip: data.ip,
      city: data.city,
      region: data.region,
      country: data.country,
      latitude: data.latitude,
      longitude: data.longitude
    }
  });

  return NextResponse.json(log);
}