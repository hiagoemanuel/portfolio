'use client'

import { useContext, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Logo } from '@/components/svgs/Logo'
import { MenuIcon } from '@/components/svgs/MenuIcon'
import { CloseIcon } from '@/components/svgs/CloseIcon'
import { themeContext } from '@/contexts/ThemeContext'
import { SunIcon } from './svgs/SunIcon'
import { MoonIcon } from './svgs/MoonIcon'

export default function MobileHeader() {
  const { isDark, switchTheme } = useContext(themeContext)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const MenuRef = useRef<HTMLDivElement>(null)

  const handleMenu = () => {
    document.documentElement.classList.toggle('overflow-y-hidden')
    document.documentElement.classList.toggle('sm:overflow-y-auto')
    setIsOpen(!isOpen)
  }

  const clickOutSide = (event: React.MouseEvent<HTMLElement>) => {
    const menu = MenuRef.current
    if (!menu?.contains(event.target as Node)) handleMenu()
  }

  return (
    <>
      <motion.header
        className="w-full p-3 rounded-t-lg border-t border-light dark:border-dark bg-main fixed bottom-0 z-40 flex sm:hidden justify-between"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'tween' }}
      >
        <Logo />
        <MenuIcon onClick={handleMenu} className="cursor-pointer" />
      </motion.header>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="w-full h-dvh bg-dark/70 fixed top-0 left-0 z-50 flex justify-end sm:hidden"
            onClick={clickOutSide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
          >
            <motion.div
              className="bg-main flex flex-col justify-between"
              ref={MenuRef}
              initial={{ x: 225 }}
              animate={{ x: 0, transition: { delay: 0.2, type: 'tween' } }}
              exit={{ x: 255 }}
            >
              <Logo className="self-end mt-5 mr-5" width={58} height={62} />
              <nav className="p-5 flex flex-col gap-5">
                <Link
                  className="font-medium text-3xl text-light dark:text-dark text-end"
                  href="/"
                  onClick={handleMenu}
                >
                  início
                </Link>
                <Link
                  className="font-medium text-3xl text-light dark:text-dark text-end"
                  href="/about-me"
                  onClick={handleMenu}
                >
                  sobre mim
                </Link>
                <Link
                  className="font-medium text-3xl text-light dark:text-dark text-end"
                  href="/projects"
                  onClick={handleMenu}
                >
                  projetos
                </Link>
                <Link
                  className="font-medium text-3xl text-light dark:text-dark text-end"
                  href="/technologies"
                  onClick={handleMenu}
                >
                  tecnologias
                </Link>
                <Link
                  className="font-medium text-3xl text-light dark:text-dark text-end"
                  href="/contact"
                  onClick={handleMenu}
                >
                  contato
                </Link>
                <button
                  className="flex gap gap-3 items-center justify-end"
                  onClick={() => switchTheme(isDark ? 'light' : 'dark')}
                >
                  <div className="w-7 h-7 p-1 bg-light dark:bg-dark rounded-full">
                    {isDark ? <MoonIcon /> : <SunIcon />}
                  </div>
                  <h3 className="font-medium text-3xl text-light dark:text-dark">tema</h3>
                </button>
              </nav>
              <button
                className="bg-dark dark:bg-light py-3 flex justify-center gap-3"
                onClick={handleMenu}
              >
                <CloseIcon />
                <h3 className="font-bold text-xl text-light dark:text-dark">fechar menu</h3>
              </button>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
