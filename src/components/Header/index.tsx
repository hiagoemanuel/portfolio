import { MainThemes } from './MainThemes'
import { MenuHamburger } from './MenuHamburger'
import { NavigationHeader } from './NavigationHeader'
import { ReactComponent as LogoSVG } from '../../svgs/icons/logo.svg'

import { HeaderStyle } from './style'

export const Header = () => {
    return (
        <HeaderStyle>
            <LogoSVG className='logo' />
            <MenuHamburger />
            <NavigationHeader />
            <MainThemes />
        </HeaderStyle>
    )
}