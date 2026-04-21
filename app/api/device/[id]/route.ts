import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: any
) {
  const id = context.params.id;

  console.log("ID:", id);

  if (!id) {
    return NextResponse.json(
      { error: "ID tidak ada" },
      { status: 400 }
    );
  }

  const device = await prisma.device.findUnique({
    where: { id },
    include: {
      logs: {
        orderBy: {
          timestamp: "desc"
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