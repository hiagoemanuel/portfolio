import Image from 'next/image'
import Link from 'next/link'
import { EyeIcon } from './svgs/EyeIcon'
import { Github } from './svgs/Github'

interface ProjectCardProps {
  name: string
  description: string
  links: {
    toView: string
    repository: string
  }
}

export const ProjectCard = ({ name, description, links }: ProjectCardProps) => {
  return (
    <div className="min-w-56 w-56  h-74 p-1 rounded-lg bg-main flex flex-col justify-between">
      <div className="text-light dark:text-dark">
        <div className="w-full h-30 mb-1 rounded-lg overflow-y-hidden">
          <Image
            src="https://singlecolorimage.com/get/201F1D/300x600"
            alt="single color"
            width={300}
            height={600}
          />
        </div>
        <h3 className="text-xl text-center font-medium">{name}</h3>
        <p className="max-h-20 text-xs font-normal ">{description}</p>
      </div>
      <div className="flex justify-between">
        <Link
          className="w-21 h-8 rounded-lg bg-dark dark:bg-light flex justify-center items-center"
          href={links.toView}
        >
          <div className="w-7 h-7">
            <EyeIcon />
          </div>
        </Link>
        <Link
          className="w-21 h-8 rounded-lg bg-dark dark:bg-light flex justify-center items-center"
          href={links.repository}
        >
          <div className="w-7 h-7">
            <Github />
          </div>
        </Link>
      </div>
    </div>
  )
}
