import { DotGrid } from '@/components/DotGrid'
import { TechCard } from '@/components/TechCard'
import { Title } from '@/components/Title'
import prisma from '@/services/prisma'

export default async function TechnologiesPage() {
  const data = await prisma.technology.findMany({ orderBy: { index: 'asc' } })

  return (
    <main className="full-viewport relative">
      <Title title="tecnologias" japTitle="テクノロジー" />
      <div className="grid gap-2 xs:gap-5 justify-center grid-cols-[repeat(2,_9.25rem)] xs:grid-cols-[repeat(2,_12rem)] sm:grid-cols-[repeat(auto-fill,_19rem)]">
        {data.map((t, i) => (
          <TechCard singlePage {...t} key={i} />
        ))}
      </div>
      <DotGrid
        className="lg:hidden"
        position={['top', 'left']}
        rows={[
          ['0', '1', '1'],
          ['1', '1', '1'],
          ['1', '1', '0'],
        ]}
      />
      <DotGrid
        className="lg:hidden"
        position={['bottom', 'right']}
        rows={[
          ['0', '1', '1'],
          ['1', '1', '1'],
          ['1', '1', '0'],
        ]}
      />
      <DotGrid
        className="hidden lg:flex"
        position={['top', 'right']}
        rows={[
          ['1', '1', '0'],
          ['1', '1', '1'],
          ['0', '1', '1'],
        ]}
      />
      <DotGrid
        className="hidden lg:flex"
        position={['bottom', 'left']}
        rows={[
          ['1', '1', '0'],
          ['1', '1', '1'],
          ['0', '1', '1'],
        ]}
      />
    </main>
  )
}
