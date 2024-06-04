import { ProjectCard } from './ProjectCard'
import { getImage } from '@/services/firebase/getImage'

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
        {projectList.map(async (p, i) => {
          const image = await getImage(p.image)
          return (
            <ProjectCard
              name={p.title}
              thumbnail={image}
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
