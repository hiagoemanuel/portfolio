import { Container } from '../Container'
import { DotGrid } from '../DotGrid'
import { MoreAboutButton } from '../MoreAboutButton'
import { ProjectCarousel } from '../ProjectCarousel'
import { Title } from '../Title'

export const Projects = () => {
  return (
    <Container>
      <Title title="projetos" japTitle="プロジェクト" />
      <ProjectCarousel />
      <MoreAboutButton text="veja todos os projetos" path="/projects" />
      <DotGrid
        position={['bottom', 'right']}
        rows={[
          ['0', '0', '1'],
          ['0', '1', '1'],
          ['1', '1', '1'],
        ]}
      />
      <DotGrid
        position={['bottom', 'left']}
        rows={[
          ['1', '0', '0'],
          ['1', '1', '0'],
          ['1', '1', '1'],
        ]}
      />
    </Container>
  )
}
