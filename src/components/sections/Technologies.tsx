import prisma from '@/services/prisma'
import { Container } from '../Container'
import { DotGrid } from '../DotGrid'
import { MoreAboutButton } from '../MoreAboutButton'
import { TechCard } from '../TechCard'
import { Title } from '../Title'

export const Technologies = async () => {
  const data = await prisma.technology.findMany({
    where: {
      featured_technology: {
        technology_id: { not: undefined },
      },
    },
  })

  return (
    <Container>
      <Title title="tecnologias" japTitle="テクノロジー" />
      <p className="font-normal text-xs xs:text-sm sm:text-2xl text-center xl:text-start mb-3 text-dark dark:text-light">
        Essas são as principais tecnologias que costumo utilizar.
      </p>
      <div className="grid grid-cols-[repeat(2,max-content)] lg:grid-cols-[repeat(3,max-content)] grid-rows-3 lg:grid-rows-2 gap-2 lg:gap-5 justify-center">
        {data.map((t, i) => (
          <TechCard {...t} key={i} />
        ))}
      </div>
      <MoreAboutButton text="veja todas tecnologias" path="/technologies" />
      <DotGrid
        position={['top', 'right']}
        rows={[
          ['1', '1', '0'],
          ['1', '1', '1'],
          ['0', '1', '1'],
        ]}
      />
      <DotGrid
        position={['bottom', 'left']}
        rows={[
          ['1', '1', '0'],
          ['1', '1', '1'],
          ['0', '1', '1'],
        ]}
      />
    </Container>
  )
}
