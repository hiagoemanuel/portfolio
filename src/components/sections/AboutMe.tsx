import prisma from '@/services/prisma'
import { Container } from '../Container'
import { DotGrid } from '../DotGrid'
import { MoreAboutButton } from '../MoreAboutButton'
import { Title } from '../Title'

export const AboutMe = async () => {
  const data = await prisma.about_me.findFirst()

  return (
    <Container>
      <Title title="sobre mim" japTitle="私について" />
      <p className="text-sm sm:text-2xl font-normal text-center lg:text-left">{data?.resume}</p>
      <MoreAboutButton text="veja mais sobre" path="/about-me" />
      <DotGrid
        position={['bottom', 'right']}
        rows={[
          ['1', '1', '1'],
          ['1', '1', '1'],
          ['1', '1', '1'],
        ]}
      />
    </Container>
  )
}
