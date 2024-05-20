import Link from 'next/link'
import { Arrow } from './svgs/Arrow'

export const MoreAboutButton = ({ text, path }: { text: string; path: string }) => {
  return (
    <div className="flex justify-center">
      <Link
        className="p-3 mt-4 sm:mt-8 bg-main rounded-lg sm:rounded-xl flex gap-2 sm:gap-4 items-center"
        href={path}
      >
        <h2 className="text-sm sm:text-2xl font-medium text-light dark:text-dark">{text}</h2>
        <div className="w-4 h-4 p-1 sm:w-6 sm:h-6 bg-light dark:bg-dark rounded sm:rounded-lg -rotate-90">
          <Arrow />
        </div>
      </Link>
    </div>
  )
}
