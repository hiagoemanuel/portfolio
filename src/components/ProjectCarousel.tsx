'use client'

import { useRef, useState } from 'react'
import { ProjectCard } from './ProjectCard'
import { getImage } from '@/services/firebase/getImage'

type MouseEventType = React.MouseEvent<HTMLInputElement>

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
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [draggable, setDraggable] = useState<boolean>(false)
  const [initScroll, setInitScroll] = useState<{ scrollLeft: number; pageX: number }>()

  const startDrag = (e: MouseEventType) => {
    if (!wrapperRef.current) return
    setDraggable(true)
    setInitScroll({ scrollLeft: wrapperRef.current.scrollLeft, pageX: e.pageX })
  }

  const dragging = (e: MouseEventType) => {
    if (!wrapperRef.current || !draggable || !initScroll) return
    wrapperRef.current.scrollLeft = initScroll.scrollLeft - (e.pageX - initScroll.pageX)
  }

  return (
    <div className="flex justify-center">
      <div
        className={`flex gap-4 transition-all overflow-x-scroll lg:overflow-x-visible lg:cursor-default lg:select-auto scroll-smooth scrollbar-hide ${draggable ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
        ref={wrapperRef}
        onMouseDown={(e: MouseEventType) => {
          startDrag(e)
        }}
        onMouseMove={(e: MouseEventType) => {
          dragging(e)
        }}
        onMouseUp={() => {
          setDraggable(false)
        }}
        onMouseLeave={() => {
          setDraggable(false)
        }}
      >
        <div />
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
        <div />
      </div>
    </div>
  )
}
