'use client'

import Link from 'next/link'
import { useContext, useRef, useState } from 'react'
import { HomeIcon } from './svgs/HomeIcon'
import { UserIcon } from './svgs/UserIcon'
import { BookIcon } from './svgs/BookIcon'
import { TerminalIcon } from './svgs/TerminalIcon'
import { PhoneIcon } from './svgs/PhoneIcon'
import { SunIcon } from './svgs/SunIcon'
import { MoonIcon } from './svgs/MoonIcon'
import { themeContext } from '@/contexts/ThemeContext'
import { motion } from 'framer-motion'
import { menuCollapse } from '@/libs/framer-motion/variants'

export default function MenuHamburger() {
  const menuRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { isDark, switchTheme } = useContext(themeContext)

  const handlerMenu = () => {
    const menu = menuRef.current
    const menuBtn = btnRef.current

    if (!menu || !menuBtn) return

    if (!isOpen) {
      setIsOpen(true)
      menuBtn.classList.add('menu-open')
      const height = menu.scrollHeight + 'px'
      menu.style.height = height
    } else {
      setIsOpen(false)
      menuBtn.classList.remove('menu-open')
      menu.style.height = '3rem'
    }
  }

  return (
    <motion.div
      ref={menuRef}
      className="sm:hidden menu rounded-md flex flex-col-reverse transition-[height] ease-in-out duration-500 overflow-y-hidden fixed left-5 bottom-5 z-10"
      style={{ height: '3rem' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className={`menu-btn outline-none z-10 w-12 min-h-12 p-2 rounded-md border border-light dark:border-dark bg-dark dark:bg-light flex flex-col justify-center items-center gap-1 cursor-pointer`}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ ease: 'easeInOut' }}
        onClick={handlerMenu}
        ref={btnRef}
      >
        <motion.span
          className={`w-2 h-2 bg-light dark:bg-dark rounded-full`}
          variants={menuCollapse}
          transition={{ duration: 0.2 }}
        />
        <span className={`w-2 h-2 bg-light dark:bg-dark rounded-full`} />
        <motion.span
          className={`w-2 h-2 bg-light dark:bg-dark rounded-full`}
          variants={menuCollapse}
          custom={true}
          transition={{ duration: 0.2 }}
        />
      </motion.button>
      <nav
        ref={listRef}
        className="transition-[visibility] ease-in-out duration-500 align-top# visible mb-1 flex flex-col gap-1 menu-list"
      >
        <Link
          className="w-12 h-12 p-2 rounded-md flex justify-center items-center bg-dark dark:bg-light"
          href="/"
        >
          <HomeIcon />
        </Link>
        <Link
          className="w-12 h-12 p-2 rounded-md flex justify-center items-center bg-dark dark:bg-light"
          href="/"
        >
          <UserIcon />
        </Link>
        <Link
          className="w-12 h-12 p-2 rounded-md flex justify-center items-center bg-dark dark:bg-light"
          href="/"
        >
          <BookIcon />
        </Link>
        <Link
          className="w-12 h-12 p-2 rounded-md flex justify-center items-center bg-dark dark:bg-light"
          href="/"
        >
          <TerminalIcon />
        </Link>
        <Link
          className="w-12 h-12 p-2 rounded-md flex justify-center items-center bg-dark dark:bg-light"
          href="/"
        >
          <PhoneIcon />
        </Link>
        <div
          className="w-12 h-12 p-2 rounded-md flex justify-center items-center bg-dark dark:bg-light cursor-pointer"
          onClick={() => {
            switchTheme(isDark ? 'light' : 'dark')
          }}
        >
          {isDark ? (
            <MoonIcon className="w-full h-full bg-dark p-1 flex items-center justify-center" />
          ) : (
            <SunIcon className="w-full p-1 bg-light" />
          )}
        </div>
      </nav>
    </motion.div>
  )
}
