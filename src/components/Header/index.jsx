import { ReactSVG } from 'react-svg'

import { MainThemes } from './MainThemes'
import { MenuHamburger } from './MenuHamburger'
import { NavigationHeader } from './NavigationHeader'

import { HeaderStyle } from './style.js'
import { Responsive } from './responsive'

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