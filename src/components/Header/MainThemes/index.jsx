import { useContext, useEffect, useRef } from 'react'
import { ThemeContext, theme } from '../../../contexts/themes'
import { DarkModeIcon, LightModeIcon } from '../../../constants/icons'
import { ThemeButtonStyle } from './style'

let darkButton
let lightButton

export const MainThemes = () => {
    const { mainTheme, setMainTheme } = useContext(ThemeContext)
    const themeButtons = useRef()

    useEffect(() => {
        darkButton = themeButtons.current.childNodes[0]
        lightButton = themeButtons.current.childNodes[1]

        darkButton.addEventListener('click', () => setMainTheme(theme.darkMode))
        lightButton.addEventListener('click', () => setMainTheme(theme.lightMode))
    }, [setMainTheme])

    useEffect(() => {
        if (mainTheme === theme.lightMode) {
            darkButton.classList.remove('hidden')
            lightButton.classList.add('hidden')
        } else {
            darkButton.classList.add('hidden')
            lightButton.classList.remove('hidden')
        }
    }, [mainTheme])

    return (
        <ThemeButtonStyle ref={themeButtons}>
            <DarkModeIcon />
            <LightModeIcon />
        </ThemeButtonStyle>
    )
}