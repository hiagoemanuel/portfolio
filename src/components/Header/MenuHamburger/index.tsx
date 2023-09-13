import { HamburgerStyle } from "./style"

export const MenuHamburger = () => {

    const toggleMenu = () => {
        const header = document.getElementsByTagName('header')[0]
        const menuActive = document.getElementsByClassName('menu-active')[0]

        if (menuActive) {
            header.classList.remove('menu-active')
            document.body.style.overflowY = 'auto'
        } else {
            header.classList.add('menu-active')
            document.body.style.overflowY = 'hidden'
        }

    }

    return (
        <HamburgerStyle onClick={() => toggleMenu()}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
        </HamburgerStyle>
    )
}