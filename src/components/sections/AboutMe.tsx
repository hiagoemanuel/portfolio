import { Container } from '../Container'
import { DotGrid } from '../DotGrid'
import { MoreAboutButton } from '../MoreAboutButton'
import { Title } from '../Title'

export const AboutMe = () => {
  return (
    <Container>
      <Title title="sobre mim" japTitle="私について" />
      {/* about_me */}
      <p className="text-sm sm:text-2xl font-normal text-center lg:text-left">{''}</p>
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
