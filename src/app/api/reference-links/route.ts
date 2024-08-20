import prisma from '@/services/prisma'
import { NextResponse } from 'next/server'

interface ILink {
  id: number
  name: string
  url: string
}

export interface IReferenceLinks {
  github: ILink | undefined
  linkedin: ILink | undefined
  curriculum: ILink | undefined
}

export async function GET(): Promise<NextResponse<IReferenceLinks>> {
  const referenceLinks = await prisma.reference_link.findMany()

  const data = {
    github: referenceLinks.find((d) => d.name === 'github'),
    linkedin: referenceLinks.find((d) => d.name === 'linkedin'),
    curriculum: referenceLinks.find((d) => d.name === 'curriculum'),
  }

  return NextResponse.json(data)
}
