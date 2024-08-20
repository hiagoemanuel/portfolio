import prisma from '@/services/prisma'
import { Container } from '../Container'
import { DotGrid } from '../DotGrid'
import { MoreAboutButton } from '../MoreAboutButton'
import { ProjectCarousel } from '../ProjectCarousel'
import { Title } from '../Title'

export const Projects = async () => {
  const data = await prisma.project.findMany({
    where: {
      featured_project: {
        project_id: { not: undefined },
      },
    },
  })

  return (
    <Container>
      <Title title="projetos" japTitle="プロジェクト" />
      {/* project */}
      {data ? (
        <ProjectCarousel projectList={data} />
      ) : (
        <div className="flex justify-center py-6">
          <p className="text-2xl font-bold text-main">Os dados não foram encontrados :(</p>
        </div>
      )}
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
