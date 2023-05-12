import { useContext, useState } from 'react'
import { ThemeContext, theme } from '../../../contexts/themes'
import { DarkModeIcon, LightModeIcon } from '../../../constants/icons'
import { ThemeButtonStyle } from './style'

const storageTheme = localStorage.getItem('portTheme')

export const MainThemes = () => {
    const { setMainTheme } = useContext(ThemeContext)
    const [isDark, setIsDark] = useState(storageTheme === 'darkMode' ? true : false)

    const handleLightDark = () => {
        if (isDark) {
            setMainTheme(theme.lightMode)
            localStorage.setItem('portTheme', 'lightMode')
        } else {
            setMainTheme(theme.darkMode)
            localStorage.setItem('portTheme', 'darkMode')
        }

        setIsDark(prevIsDark => !prevIsDark)
    }

    return (
        <ThemeButtonStyle onClick={handleLightDark} >
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </ThemeButtonStyle>
    )
}