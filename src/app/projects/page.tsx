import { DotGrid } from '@/components/DotGrid'
import { ProjectCard } from '@/components/ProjectCard'
import { Title } from '@/components/Title'

const exempleProject = {
  name: 'Project',
  image: '/project-exemple.jpg',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum elit sapien, at sollicitudin lectus faucibus vitae. In a scelerisque ex.',
  links: {
    toView: '/',
    repository: '/',
  },
}

function makeList<T>(obj: T, repeat: number): T[] {
  const list: T[] = []
  for (let i = 0; i < repeat; i++) list.push(obj)
  return list
}

export default function ProjectsPage() {
  const projectList = makeList(exempleProject, 7)

  return (
    <main className="full-viewport relative">
      <Title title="projetos" japTitle="プロジェクト" />
      <div className="flex flex-wrap justify-center gap-2 md:gap-7">
        {projectList.map((p, i) => (
          <ProjectCard
            thumbnail={p.image}
            name={p.name}
            description={p.description}
            links={p.links}
            key={i}
          />
        ))}
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
