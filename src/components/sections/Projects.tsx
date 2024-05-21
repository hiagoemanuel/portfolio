import { Container } from '../Container'
import { DotGrid } from '../DotGrid'
import { MoreAboutButton } from '../MoreAboutButton'
import { ProjectCard } from '../ProjectCard'
import { Title } from '../Title'

export const Projects = () => {
  return (
    <Container>
      <Title title="projetos" japTitle="プロジェクト" />
      <div className="flex justify-center gap-4 snap-x">
        <ProjectCard
          name="project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum elit sapien, at sollicitudin lectus faucibus vitae. In a scelerisque ex."
          links={{ toView: '/', repository: '/' }}
        />
        <ProjectCard
          name="project 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum elit sapien, at sollicitudin lectus faucibus vitae. In a scelerisque ex."
          links={{ toView: '/', repository: '/' }}
        />
        <ProjectCard
          name="project 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum elit sapien, at sollicitudin lectus faucibus vitae. In a scelerisque ex."
          links={{ toView: '/', repository: '/' }}
        />
      </div>
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
