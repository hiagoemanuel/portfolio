import Link from 'next/link'
import { EyeIcon } from './svgs/EyeIcon'
import { Github } from './svgs/Github'
import Image from 'next/image'

interface ProjectCardProps {
  name: string
  thumbnail: string | null
  description: string | null
  links: {
    toView: string
    repository: string
  }
  className?: string
}

export const ProjectCard = ({
  name,
  thumbnail,
  description,
  links,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={`${className} min-w-56 sm:min-w-76 w-56 sm:w-76 h-74 sm:h-100 p-1 rounded-lg sm:rounded-xl bg-main flex flex-col justify-between`}
    >
      <div className="text-light dark:text-dark">
        <Image
          className="w-full h-30 sm:h-64 mb-1 relative rounded-lg overflow-y-hidden transition-[background] bg-cover duration-1000 ease-linear hover:bg-bottom"
          src={thumbnail ?? ''}
          width={300}
          height={168}
          alt={name}
        />
        <h3 className="text-xl sm:text-3xl text-center sm:text-start font-medium">{name}</h3>
        <p className="max-h-20 text-xs sm:text-base font-normal">{description}</p>
      </div>
      <div className="flex justify-between">
        <Link
          className="w-21 sm:w-32 h-8 sm:h-12 rounded-lg sm:rounded-xl bg-dark dark:bg-light flex justify-center items-center"
          href={links.toView}
          target="_blank"
        >
          <div className="w-7 sm:w-9 h-7 sm:h-9">
            <EyeIcon />
          </div>
        </Link>
        <Link
          className="w-21 sm:w-32 h-8 sm:h-12 rounded-lg sm:rounded-xl bg-dark dark:bg-light flex justify-center items-center"
          href={links.repository}
          target="_blank"
        >
          <div className="w-7 sm:w-9 h-7 sm:h-9">
            <Github />
          </div>
        </Link>
      </div>
    </div>
  )
}
