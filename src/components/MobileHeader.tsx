'use client'

import { useContext, useRef, useState } from 'react'
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

  const handleMenu = () => setIsOpen(!isOpen)

  const clickOutSite = (event: React.MouseEvent<HTMLElement>) => {
    const menu = MenuRef.current
    if (!menu?.contains(event.target as Node)) handleMenu()
  }

  return (
    <>
      <header className="w-full p-3 rounded-t-lg border-t border-light dark:border-dark bg-main fixed bottom-0 z-40 flex sm:hidden justify-between">
        <Logo />
        <MenuIcon onClick={handleMenu} className="cursor-pointer" />
      </header>
      {isOpen && (
        <section
          className="w-full h-dvh bg-dark/70 fixed top-0 left-0 z-50 flex justify-end sm:hidden"
          onClick={clickOutSite}
        >
          <div className="bg-main flex flex-col justify-between" ref={MenuRef}>
            <Logo className="self-end mt-5 mr-5" width={58} height={62} />
            <nav className=" p-5 flex flex-col gap-5 items-end">
              <Link
                className="font-medium text-3xl text-light dark:text-dark"
                href="/"
                onClick={handleMenu}
              >
                início
              </Link>
              <Link
                className="font-medium text-3xl text-light dark:text-dark"
                href="/about-me"
                onClick={handleMenu}
              >
                sobre mim
              </Link>
              <Link
                className="font-medium text-3xl text-light dark:text-dark"
                href="/projects"
                onClick={handleMenu}
              >
                projetos
              </Link>
              <Link
                className="font-medium text-3xl text-light dark:text-dark"
                href="/technologies"
                onClick={handleMenu}
              >
                tecnologias
              </Link>
              <Link
                className="font-medium text-3xl text-light dark:text-dark"
                href="/contact"
                onClick={handleMenu}
              >
                contato
              </Link>
              <button
                className="flex gap gap-3 items-center"
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
          </div>
        </section>
      )}
    </>
  )
}
