import { ContactButton } from './ContactButton'
import { Arrow } from './svgs/Arrow'
import { CurriculumIcon } from './svgs/CurriculumIcon'
import { Github } from './svgs/Github'
import { Linkedin } from './svgs/Linkedin'

export const Hero = () => {
  return (
    <section className="w-full h-svh flex justify-center items-center relative">
      <div className="flex flex-col">
        <div className="flex items-end">
          <h1 className="text-16 sm:text-9xl font-extrabold leading-none">Hiago</h1>
          <div className="flex gap-1 sm:gap-2 z-10">
            <ContactButton href="/" icon={<Github />} />
            <ContactButton href="/" icon={<Linkedin />} />
            <ContactButton href="/" icon={<CurriculumIcon />} />
          </div>
        </div>
        <h1 className="text-16 sm:text-9xl font-extrabold leading-none tracking-[.25rem] sm:tracking-[.60rem]">
          Emanuel
        </h1>
        <h6 className="text-2xl sm:text-5xl font-extralight text-center tracking-[.313rem] sm:tracking-[.60rem]">
          front-end developer
        </h6>
      </div>
      <div className="w-9 h-20 sm:w-14 sm:h-26 p-1 bg-dark dark:bg-light rounded-lg absolute bottom-5">
        <div className="w-full h-8 p-2 sm:h-12 sm:p-3 flex bg-light dark:bg-dark rounded-lg justify-center items-center">
          <Arrow />
        </div>
      </div>
    </section>
  )
}
