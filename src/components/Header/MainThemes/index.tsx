import { useContext, useState } from 'react'

import { ThemeContext, theme } from '../../../contexts/themes'

import { ReactComponent as DarkSVG } from '../../../svgs/icons/theme-icons/dark-mode.svg'
import { ReactComponent as LightSVG } from '../../../svgs/icons/theme-icons/light-mode.svg'

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
            {isDark ? <LightSVG /> : <DarkSVG />}
        </ThemeButtonStyle>
    )
}