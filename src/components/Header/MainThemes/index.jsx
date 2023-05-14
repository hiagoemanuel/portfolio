import { useContext, useState } from 'react'
import { ThemeContext, theme } from '../../../contexts/themes'
import { ThemeButtonStyle } from './style'
import { ReactSVG } from 'react-svg'

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
            {isDark ? <ReactSVG src='images/icons/theme-icons/light-mode.svg' /> : <ReactSVG src='images/icons/theme-icons/dark-mode.svg' />}
        </ThemeButtonStyle>
    )
}