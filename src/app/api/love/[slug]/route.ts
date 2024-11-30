import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const post = await prisma.postLove.findUnique({
      where: { slug: params.slug },
    });
    return NextResponse.json({ count: post?.count || 0 });
  } catch {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { action } = await request.json();
  
  try {
    const post = await prisma.postLove.upsert({
      where: { slug: params.slug },
      create: { slug: params.slug, count: action === 'increment' ? 1 : 0 },
      update: {
        count: {
          [action === 'increment' ? 'increment' : 'decrement']: 1,
        },
      },
    });
    
    return NextResponse.json({ count: post.count });
  } catch {
    return NextResponse.json({ error: 'Database error occurred' }, { status: 500 });
  }
}