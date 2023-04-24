import { useContext, useState } from 'react'
import { ThemeContext, theme } from '../../../contexts/themes'
import { DarkModeIcon, LightModeIcon } from '../../../constants/icons'
import { ThemeButtonStyle } from './style'

export const MainThemes = () => {
    const { setMainTheme } = useContext(ThemeContext)
    const [isDark, setIsDark] = useState(false)

    const handleLightDark = () => {
        !isDark ? setMainTheme(theme.darkMode) : setMainTheme(theme.lightMode) 
        setIsDark(prevIsDark => !prevIsDark)
    }

    return (
        <ThemeButtonStyle onClick={handleLightDark} >
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </ThemeButtonStyle>
    )
}