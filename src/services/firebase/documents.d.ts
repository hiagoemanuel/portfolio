import { type ProjectInterface } from '@/components/ProjectCarousel'

export interface HeroDoc {
  links: {
    curriculum: string
    github: string
    linkedin: string
  }
}

export interface AboutMeDoc {
  description: string
  image: string
}

export interface ProjectsDoc {
  list: ProjectInterface[]
}

export interface TechnologiesDoc {
  list: Array<{ icon: string; name: string }>
}

export interface ContatctDoc {
  email: string
  networks: Array<{
    media: string
    href: string
    icon: string
    slug: string
  }>
}
