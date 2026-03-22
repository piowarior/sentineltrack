import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const log = await prisma.deviceLog.create({
    data: {
      deviceId: data.deviceId,
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