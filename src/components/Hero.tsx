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
          <h1 className="text-16 font-extrabold leading-none">Hiago</h1>
          <div className="flex gap-1 z-10">
            <ContactButton href="/" icon={<Github />} />
            <ContactButton href="/" icon={<Linkedin />} />
            <ContactButton href="/" icon={<CurriculumIcon />} />
          </div>
        </div>
        <h1 className="text-16 font-extrabold leading-none tracking-[0.25rem]">Emanuel</h1>
        <h6 className="text-2xl font-extralight text-center tracking-[0.313rem]">
          front-end developer
        </h6>
      </div>
      <div className="w-9 h-20 p-1 bg-dark dark:bg-light rounded-lg absolute bottom-5">
        <div className="w-full h-8 flex bg-light dark:bg-dark rounded-lg justify-center items-center">
          <Arrow />
        </div>
      </div>
    </section>
  )
}
