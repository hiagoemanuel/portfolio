import { useState } from 'react'
import { MainThemes } from './MainThemes'
import { MenuHamburger } from './MenuHamburger'
import { NavigationHeader } from './NavigationHeader'
import { ReactComponent as LogoSVG } from '../../svgs/icons/logo.svg'

import { HeaderStyle } from './style'

export const Header = () => {
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <HeaderStyle>
            <LogoSVG className='logo' />
            <MenuHamburger menuIsActive={isActive} setMenuIsActive={setIsActive} />
            <NavigationHeader setMenuIsActive={setIsActive} />
            <MainThemes />
        </HeaderStyle>
    )
}