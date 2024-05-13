'use client'

import Link from 'next/link'
import { Logo } from './svgs/Logo'
import Switch from 'react-switch'
import { useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'
import { SunIcon } from './svgs/SunIcon'
import { MoonIcon } from './svgs/MoonIcon'

export const Header = () => {
  const [isDark, setIsDark] = useState<boolean>(false)

  const handlerTheme = () => {
    const htmlRef = document.getElementsByTagName('html')[0]
    if (isDark) {
      setIsDark(false)
      htmlRef.classList.remove('dark')
    } else {
      setIsDark(true)
      htmlRef.classList.add('dark')
    }
  }

  const tailwindRef = resolveConfig(tailwindConfig)
  const darkColor = tailwindRef.theme.accentColor.dark as string
  const lightColor = tailwindRef.theme.accentColor.light as string

  return (
    <header className="sticky top-0 hidden sm:flex items-center w-fit mx-auto p-4 bg-main rounded-b-xl gap-12">
      <Logo />
      <nav className="flex gap-6">
        <Link className="text-light dark:text-dark font-medium text-base md:text-2xl" href="/">
          início
        </Link>
        <Link className="text-light dark:text-dark font-medium text-base md:text-2xl" href="/">
          sobre mim
        </Link>
        <Link className="text-light dark:text-dark font-medium text-base md:text-2xl" href="/">
          projetos
        </Link>
        <Link className="text-light dark:text-dark font-medium text-base md:text-2xl" href="/">
          tecnologias
        </Link>
        <Link className="text-light dark:text-dark font-medium text-base md:text-2xl" href="/">
          contato
        </Link>
      </nav>
      <Switch
        onChange={handlerTheme}
        checked={isDark}
        width={50}
        height={24}
        borderRadius={12}
        onColor={isDark ? darkColor : lightColor}
        offColor={isDark ? darkColor : lightColor}
        onHandleColor={isDark ? lightColor : darkColor}
        offHandleColor={isDark ? lightColor : darkColor}
        handleDiameter={16}
        uncheckedIcon={<SunIcon className="absolute top-1 right-1" />}
        checkedIcon={<MoonIcon className="absolute top-1 left-2" />}
      />
    </header>
  )
}
