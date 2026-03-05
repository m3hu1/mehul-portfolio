import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const post = await prisma.postLove.findUnique({
      where: { slug },
    });
    return NextResponse.json({ count: post?.count || 0 });
  } catch (error) {
    console.error("GET /api/love/[slug] error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const { action } = await request.json();

  try {
    const post = await prisma.postLove.upsert({
      where: { slug },
      create: { slug, count: action === "increment" ? 1 : 0 },
      update: {
        count: {
          [action === "increment" ? "increment" : "decrement"]: 1,
        },
      },
    });

    return NextResponse.json({ count: post.count });
  } catch (error) {
    console.error("POST /api/love/[slug] error:", error);
    return NextResponse.json(
      { error: "Database error occurred" },
      { status: 500 },
    );
  }
}
