'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { HomeIcon } from './svgs/HomeIcon'
import { UserIcon } from './svgs/UserIcon'
import { BookIcon } from './svgs/BookIcon'
import { TerminalIcon } from './svgs/TerminalIcon'
import { PhoneIcon } from './svgs/PhoneIcon'

export default function MenuHamburger() {
  const menuRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)

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
      menu.style.height = '2rem'
    }
  }

  return (
    <div
      ref={menuRef}
      className="md:hidden menu rounded-md flex flex-col-reverse transition-[height] ease-in-out duration-500 overflow-y-hidden absolute left-5 bottom-5"
      style={{ height: '2rem' }}
    >
      <button
        ref={btnRef}
        onClick={handlerMenu}
        className={`menu-btn outline-none z-10 w-8 min-h-8 rounded-md bg-dark dark:bg-light flex flex-col justify-center items-center gap-1 cursor-pointer ${isOpen ? 'relative' : ''}`}
      ></button>
      <nav
        ref={listRef}
        className="transition-[visibility] ease-in-out duration-500 align-top# visible mb-[0.13rem] flex flex-col gap-[0.13rem] menu-list"
      >
        <Link
          className="w-8 h-8 rounded-md flex justify-center items-center bg-dark dark:bg-light"
          href="/"
        >
          <HomeIcon />
        </Link>
        <Link
          className="w-8 h-8 rounded-md flex justify-center items-center bg-dark dark:bg-light"
          href="/"
        >
          <UserIcon />
        </Link>
        <Link
          className="w-8 h-8 rounded-md flex justify-center items-center bg-dark dark:bg-light"
          href="/"
        >
          <BookIcon />
        </Link>
        <Link
          className="w-8 h-8 rounded-md flex justify-center items-center bg-dark dark:bg-light"
          href="/"
        >
          <TerminalIcon />
        </Link>
        <Link
          className="w-8 h-8 rounded-md flex justify-center items-center bg-dark dark:bg-light"
          href="/"
        >
          <PhoneIcon />
        </Link>
      </nav>
    </div>
  )
}
