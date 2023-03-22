import { createContext, useState } from "react"

export const theme = {
    lightMode: {
        primaryColor: '#000000',
        secondaryColor: '#ffffff'
    },
    darkMode: {
        primaryColor: '#ffffff',
        secondaryColor: '#000000'
    }
}

const ThemeContext = createContext({})

const ThemeProvider = ({ children }) => {
    const [mainTheme, setMainTheme] = useState(theme.lightMode)

    return (
        <ThemeContext.Provider value={{ mainTheme, setMainTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }