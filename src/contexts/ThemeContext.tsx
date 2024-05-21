'use client'

import { parseCookies, setCookie } from 'nookies'
import React, { createContext, useEffect, useState } from 'react'

interface IThemeContext {
  isDark: boolean
  switchTheme: (theme: 'dark' | 'light') => void
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const themeContext = createContext({} as IThemeContext)

const maxAge = { maxAge: 60 * 24 * 30 * 3 /* 3 month :P */ }

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(true)

  const switchTheme = (theme: 'dark' | 'light') => {
    if (theme === 'dark') {
      setCookie(null, 'theme.he-portfolio', 'dark', maxAge)
      setIsDark(true)
    } else if (theme === 'light') {
      setCookie(null, 'theme.he-portfolio', 'light', maxAge)
      setIsDark(false)
    }
  }

  useEffect(() => {
    const { 'theme.he-portfolio': theme } = parseCookies()
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setCookie(null, 'theme.he-portfolio', 'dark', maxAge)
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setCookie(null, 'theme.he-portfolio', 'light', maxAge)
      setIsDark(false)
    }
  }, [isDark])

  return <themeContext.Provider value={{ isDark, switchTheme }}>{children}</themeContext.Provider>
}
