import { MainTheme } from './MainTheme'
import { LogoIcon } from '../../constants/vectors'
import { HeaderStyle } from './style.js'
import { MenuHamburger } from './MenuHamburger'
import { NavigationHeader } from './NavigationHeader'

export const Header = () => {
    return (
        <HeaderStyle>
            <LogoIcon propClass='logo-icon' />
            <MenuHamburger />
            <NavigationHeader />
            <MainTheme />
        </HeaderStyle>
    )
}