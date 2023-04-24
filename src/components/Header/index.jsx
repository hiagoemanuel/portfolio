import { MainThemes } from './MainThemes'
import { LogoIcon } from '../../constants/icons'
import { HeaderStyle } from './style.js'
import { MenuHamburger } from './MenuHamburger'
import { NavigationHeader } from './NavigationHeader'
import { Responsive } from './responsive'

export const Header = () => {
    return (
        <HeaderStyle>
            <Responsive />
            <LogoIcon propClass='logo-icon' />
            <MenuHamburger />
            <NavigationHeader />
            <MainThemes />
        </HeaderStyle>
    )
}