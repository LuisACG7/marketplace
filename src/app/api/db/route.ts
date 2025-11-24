import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const now = await prisma.$queryRaw`SELECT NOW()`;
  return NextResponse.json({ ok: true, now });
}
