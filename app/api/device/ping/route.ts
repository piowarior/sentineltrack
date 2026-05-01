import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

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

  // simple suspicious detection
  let suspicious = false;
  let reason = null;

  if (data.speed && data.speed > 150) {
    suspicious = true;
    reason = "Device moving too fast";
  }

  const log = await prisma.deviceLog.create({
    data: {
      deviceId: device.id,
      ip: data.ip || "unknown",
      city: data.city || "unknown",
      region: data.region || "unknown",
      country: data.country || "unknown",
      latitude: data.latitude,
      longitude: data.longitude,

      wifiName: data.wifiName,
      networkType: data.networkType,
      battery: data.battery,
      speed: data.speed,

      isSuspicious: suspicious,
      reason
    }
  });

  // update latest device state
  await prisma.device.update({
    where: {
      id: device.id
    },
    data: {
      lastLatitude: data.latitude,
      lastLongitude: data.longitude,
      lastSeen: new Date(),
      lastIp: data.ip,
      lastWifiName: data.wifiName
    }
  });

  // create alert if suspicious
  if (suspicious) {
    await prisma.alert.create({
      data: {
        deviceId: device.id,
        type: "SUSPICIOUS_MOVEMENT",
        message: reason || "Unknown suspicious activity"
      }
    });
  }

  return NextResponse.json(log);
}

export async function GET() {
  const logs = await prisma.deviceLog.findMany({
    orderBy: {
      timestamp: "desc"
    }
  });

  return NextResponse.json(logs);
}