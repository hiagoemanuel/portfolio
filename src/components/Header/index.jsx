import { MainThemes } from './MainThemes'
import { HeaderStyle } from './style.js'
import { MenuHamburger } from './MenuHamburger'
import { NavigationHeader } from './NavigationHeader'
import { Responsive } from './responsive'
import { ReactSVG } from 'react-svg'

export const Header = () => {
    return (
        <HeaderStyle>
            <Responsive />
            <ReactSVG id='logo' src='/images/icons/logo.svg' />
            <MenuHamburger />
            <NavigationHeader />
            <MainThemes />
        </HeaderStyle>
    )
}