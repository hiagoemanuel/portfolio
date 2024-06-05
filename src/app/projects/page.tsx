import { DotGrid } from '@/components/DotGrid'
import { ProjectCard } from '@/components/ProjectCard'
import { Title } from '@/components/Title'
import { type ProjectsDoc } from '@/services/firebase/documents'
import { getDocument } from '@/services/firebase/getDocument'
import { getImage } from '@/services/firebase/getImage'

export default async function ProjectsPage() {
  const docRef = await getDocument<ProjectsDoc>('single-page', 'projects')

  return (
    <main className="full-viewport relative">
      <Title title="projetos" japTitle="プロジェクト" />
      <div className="flex flex-wrap justify-center gap-2 md:gap-7">
        {docRef?.list.map(async (p, i) => {
          const image = await getImage(p.image)
          return (
            <ProjectCard
              thumbnail={image}
              name={p.title}
              description={p.description}
              links={p.links}
              key={i}
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
