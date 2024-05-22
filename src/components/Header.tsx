'use client'

import Link from 'next/link'
import { Logo } from './svgs/Logo'
import Switch from 'react-switch'
import { useContext, useEffect } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'
import { SunIcon } from './svgs/SunIcon'
import { MoonIcon } from './svgs/MoonIcon'
import { themeContext } from '@/contexts/ThemeContext'
import { motion } from 'framer-motion'

export const Header = () => {
  const { isDark, switchTheme } = useContext(themeContext)

  useEffect(() => {
    const radioRef = document.getElementsByClassName('react-switch-handle')[0]
    radioRef.classList.add('pointer-events-none')
  }, [])

  const tailwindRef = resolveConfig(tailwindConfig)
  const darkColor = tailwindRef.theme.accentColor.dark as string
  const lightColor = tailwindRef.theme.accentColor.light as string

  return (
    <motion.header
      className="sticky top-0 z-20 hidden border border-t-0 border-light dark:border-dark sm:flex items-center max-w-fit mx-auto p-4 bg-main rounded-b-xl gap-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: 'tween' }}
    >
      <Logo />
      <nav className="flex gap-5">
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
        className="w-6 rotate-90 origin-[1.1rem_0.4rem]"
        onChange={() => {
          switchTheme(isDark ? 'light' : 'dark')
        }}
        checked={isDark}
        width={50}
        height={24}
        borderRadius={12}
        onColor={isDark ? darkColor : lightColor}
        offColor={isDark ? darkColor : lightColor}
        onHandleColor={isDark ? lightColor : darkColor}
        offHandleColor={isDark ? lightColor : darkColor}
        activeBoxShadow="0 0 0 0"
        handleDiameter={16}
        uncheckedIcon={<SunIcon className="w-4 absolute top-1 right-1" />}
        checkedIcon={<MoonIcon className="h-4 absolute top-1 left-2 -rotate-90" />}
      />
    </motion.header>
  )
}
