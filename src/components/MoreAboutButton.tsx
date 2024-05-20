import Link from 'next/link'
import { Arrow } from './svgs/Arrow'

export const MoreAboutButton = ({ text, path }: { text: string; path: string }) => {
  return (
    <div className="flex justify-center">
      <Link className="p-3 mt-4 bg-main rounded-lg flex gap-2 items-center" href={path}>
        <h2 className="text-sm font-medium text-light dark:text-dark">{text}</h2>
        <div className="w-4 h-4 p-1 bg-light dark:bg-dark rounded -rotate-90">
          <Arrow />
        </div>
      </Link>
    </div>
  )
}
