import { Container } from '../Container'
import { DotGrid } from '../DotGrid'
import { MoreAboutButton } from '../MoreAboutButton'
import { TechCard } from '../TechCard'
import { Title } from '../Title'
import { NextJs } from '../svgs/NextJs'

export const Technologies = () => {
  return (
    <Container>
      <Title title="tecnologias" japTitle="テクノロジー" />
      <p className="font-normal text-xs text-center mb-3 text-dark dark:text-light">
        Essas são as principais tecnologias que costumo utilizar.
      </p>
      <div className="grid grid-cols-[repeat(2,_9.25rem)] grid-rows-3 gap-2 justify-center">
        <TechCard name="Next.js" icon={<NextJs />} />
        <TechCard name="Next.js" icon={<NextJs />} />
        <TechCard name="Next.js" icon={<NextJs />} />
        <TechCard name="Next.js" icon={<NextJs />} />
        <TechCard name="Next.js" icon={<NextJs />} />
        <TechCard name="Next.js" icon={<NextJs />} />
      </div>
      <MoreAboutButton text="veja todas tecnologias" path="/tecnologies" />
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
