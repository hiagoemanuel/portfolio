import React, { createContext, useState } from "react"

type Theme = {
    primaryColor: string,
    secondaryColor: string
}

interface Themes {
    lightMode: Theme,
    darkMode: Theme
}

export const theme: Themes = {
    lightMode: {
        primaryColor: '#000000',
        secondaryColor: '#ffffff'
    },
    darkMode: {
        primaryColor: '#ffffff',
        secondaryColor: '#000000'
    }
}


type PropThemeContext = {
    mainTheme: Theme,
    setMainTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<PropThemeContext>({
    mainTheme: theme.lightMode,
    setMainTheme: () => { }
})

type PropsProvider = { children: React.ReactNode }
const storageTheme = localStorage.getItem('portTheme')

export const ThemeProvider = ({ children }: PropsProvider) => {
    const [mainTheme, setMainTheme] = useState(storageTheme === 'darkMode' ? theme.darkMode : theme.lightMode)

    return (
        <ThemeContext.Provider value={{ mainTheme, setMainTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}