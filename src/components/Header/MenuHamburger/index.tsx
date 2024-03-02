import { useState } from "react"
import { HamburgerStyle } from "./style"

export const MenuHamburger = () => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const toggleMenu = () => {
        const header = document.getElementsByTagName('header')[0]

        if (isActive) {
            header.classList.remove('menu-active')
            setIsActive(false)
            document.body.style.overflowY = 'auto'
        } else {
            header.classList.add('menu-active')
            setIsActive(true)
            document.body.style.overflowY = 'hidden'
        }
    }

    return (
        <HamburgerStyle
            onClick={() => toggleMenu()}
            className={isActive ? 'active' : 'not-active'}
        >
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
        </HamburgerStyle>
    )
}