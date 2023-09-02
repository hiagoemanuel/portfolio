import { HamburgerStyle } from "./style"

export const MenuHamburger = () => {

    const toggleMenu = () => {
        const header = document.getElementsByTagName('header')[0]
        const menuActive = document.getElementsByClassName('menu-active')[0]

        menuActive ? header.classList.remove('menu-active') : header.classList.add('menu-active')
    }

    return (
        <HamburgerStyle onClick={() => toggleMenu()}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
        </HamburgerStyle>
    )
}