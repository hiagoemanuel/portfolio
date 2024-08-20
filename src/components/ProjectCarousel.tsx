import { ProjectCard } from './ProjectCard'

export interface ProjectInterface {
  id: number
  title: string
  description: string | null
  url_repository: string
  url_view: string
  thumbnail: string | null
}

export const ProjectCarousel = ({ projectList }: { projectList: ProjectInterface[] }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center gap-4 transition-all">
        {/* project */}
        {projectList.map(async (p, i) => {
          return (
            <ProjectCard
              name={p.title}
              thumbnail={p.thumbnail}
              description={p.description}
              links={{ repository: p.url_repository, toView: p.url_view }}
              key={i}
            />
          )
        })}
      </div>
    </div>
  )
}
