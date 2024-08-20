import prisma from '@/services/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const data = await prisma.reference_link.findMany()

  return NextResponse.json(data)
}
