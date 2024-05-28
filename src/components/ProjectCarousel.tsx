'use client'

import { useRef, useState } from 'react'
import { ProjectCard } from './ProjectCard'

type MouseEventType = React.MouseEvent<HTMLInputElement>

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

export const ProjectCarousel = () => {
  const projectList = makeList(exempleProject, 3)
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
        {projectList.map((p, i) => (
          <ProjectCard
            name={p.name}
            thumbnail={p.image}
            description={p.description}
            links={p.links}
            key={i}
          />
        ))}
        <div />
      </div>
    </div>
  )
}
