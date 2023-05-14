import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

import { List } from "./style"

export const NavigationHeader = () => {
    const navList = useRef()

    useEffect(() => {
        const menuActive = document.getElementsByTagName('header')[0]

        navList.current.addEventListener('click', () => {
            if (menuActive) menuActive.classList.remove('menu-active')
        })
    }, [])

    return (
        <nav>
            <List ref={navList}>
                <li><Link to='/'>Início</Link></li>
                <li><Link to='/about-me'>Sobre Mim</Link></li>
                <li><Link to='/projects'>Projetos</Link></li>
                <li><Link to='/skills'>Habilidades</Link></li>
                <li><Link to='/contact'>Contato</Link></li>
            </List>
        </nav>
    )
}