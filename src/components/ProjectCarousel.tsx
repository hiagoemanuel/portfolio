import { ProjectCard } from './ProjectCard'

export interface ProjectInterface {
  title: string
  image: string
  description: string
  links: {
    toView: string
    repository: string
  }
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
              thumbnail={''}
              description={p.description}
              links={p.links}
              key={i}
            />
          )
        })}
      </div>
    </div>
  )
}
