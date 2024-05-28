import { DotGrid } from '@/components/DotGrid'
import { TechCard } from '@/components/TechCard'
import { Title } from '@/components/Title'
import { NextJs } from '@/components/svgs/NextJs'

const exempleTech = {
  icon: <NextJs />,
  name: 'Next.js',
}

function makeList<T>(obj: T, repeat: number): T[] {
  const list: T[] = []
  for (let i = 0; i < repeat; i++) list.push(obj)
  return list
}

export default function TechnologiesPage() {
  const techList = makeList(exempleTech, 6)

  return (
    <main className="full-viewport relative">
      <Title title="tecnologias" japTitle="テクノロジー" />
      <div className="grid gap-2 xs:gap-5 justify-center grid-cols-[repeat(1,_16rem)] xs:grid-cols-[repeat(2,_12rem)] sm:grid-cols-[repeat(auto-fill,_19rem)]">
        {techList.map((t, i) => (
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
