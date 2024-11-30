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
    console.log('GET request successful:', post);
    return NextResponse.json({ count: post?.count || 0 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { action } = await request.json();
  console.log('POST request received:', { slug: params.slug, action });
  
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
    
    console.log('Database updated:', post);
    return NextResponse.json({ count: post.count });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}