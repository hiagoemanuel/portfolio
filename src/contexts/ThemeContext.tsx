'use client'

import React, { createContext, useEffect, useState } from 'react'

interface IThemeContext {
  isDark: boolean
  setIsDark: (isDark: boolean) => void
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const themeContext = createContext({} as IThemeContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    const htmlRef = document.getElementsByTagName('html')[0]
    if (htmlRef.classList.contains('dark')) {
      htmlRef.classList.remove('dark')
    } else if (isDark) {
      htmlRef.classList.add('dark')
    }
  }, [isDark])

  return <themeContext.Provider value={{ isDark, setIsDark }}>{children}</themeContext.Provider>
}
