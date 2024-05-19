'use client'

import { ContactButton } from './ContactButton'
import { Arrow } from './svgs/Arrow'
import { CurriculumIcon } from './svgs/CurriculumIcon'
import { Github } from './svgs/Github'
import { Linkedin } from './svgs/Linkedin'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="w-full h-svh sm:h-[calc(100svh-4rem)] pb-5 flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col grow justify-center">
        <motion.div
          className="flex items-end"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, type: 'tween', duration: 1, ease: 'easeInOut' }}
        >
          <h1 className="text-16 sm:text-9xl font-extrabold leading-none bg-light dark:bg-dark">
            Hiago
          </h1>
          <motion.div
            className="flex gap-1 sm:gap-2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.25, type: 'tween', duration: 0.5, ease: 'easeInOut' }}
          >
            <ContactButton href="/" icon={<Github />} />
            <ContactButton href="/" icon={<Linkedin />} />
            <ContactButton href="/" icon={<CurriculumIcon />} />
          </motion.div>
        </motion.div>
        <motion.h1
          className="text-16 sm:text-9xl font-extrabold leading-none tracking-[.25rem] sm:tracking-[.60rem]"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, type: 'tween', duration: 1, ease: 'easeInOut' }}
        >
          Emanuel
        </motion.h1>
        <motion.h6
          className="text-2xl sm:text-5xl font-extralight text-center tracking-[.313rem] sm:tracking-[.60rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, type: 'tween', duration: 0.5, ease: 'easeInOut' }}
        >
          front-end developer
        </motion.h6>
      </div>
      <div className="w-9 h-20 min-h-20 sm:w-14 sm:h-26 sm:min-h-24 p-1 bg-dark dark:bg-light rounded-lg">
        <div className="w-full h-8 p-2 sm:h-12 sm:p-3 flex bg-light dark:bg-dark rounded-lg justify-center items-center">
          <Arrow />
        </div>
      </div>
    </section>
  )
}
