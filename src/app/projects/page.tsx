import { DotGrid } from '@/components/DotGrid'
import { ProjectCard } from '@/components/ProjectCard'
import { Title } from '@/components/Title'
import prisma from '@/services/prisma'

export default async function ProjectsPage() {
  const data = await prisma.project.findMany({ orderBy: { index: 'asc' } })

  return (
    <main className="full-viewport relative">
      <Title title="projetos" japTitle="プロジェクト" />
      <div className="md:gap-7 sm:grid-cols-[repeat(auto-fill,19rem)] grid gap-2 justify-center grid-cols-[repeat(auto-fill,14rem)]">
        {data.map(async (p) => {
          return (
            <ProjectCard
              thumbnail={p.thumbnail}
              name={p.title}
              description={p.description}
              links={{ toView: p.url_view, repository: p.url_repository }}
              key={p.id}
            />
          )
        })}
      </div>
      <DotGrid
        className="hidden md:flex"
        position={['top', 'right']}
        rows={[
          ['1', '1', '1'],
          ['0', '1', '1'],
          ['0', '0', '1'],
        ]}
      />
      <DotGrid
        className="md:hidden"
        position={['top', 'left']}
        rows={[
          ['1', '1', '1'],
          ['1', '1', '0'],
          ['1', '0', '0'],
        ]}
      />
      <DotGrid
        className="md:hidden"
        position={['bottom', 'right']}
        rows={[
          ['0', '0', '1'],
          ['0', '1', '1'],
          ['1', '1', '1'],
        ]}
      />
      <DotGrid
        className="hidden md:flex"
        position={['bottom', 'left']}
        rows={[
          ['1', '0', '0'],
          ['1', '1', '0'],
          ['1', '1', '1'],
        ]}
      />
    </main>
  )
}
