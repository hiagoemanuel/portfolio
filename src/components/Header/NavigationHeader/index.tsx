import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

import { List } from "./style"

interface IProps {
    setMenuIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavigationHeader = ({ setMenuIsActive }: IProps) => {
    const navList = useRef<HTMLUListElement>(null)

    useEffect(() => {
        const menuActive = document.getElementsByTagName('header')[0]

        if (navList.current) {
            navList.current.addEventListener('click', () => {
                if (menuActive) {
                    menuActive.classList.remove('menu-active')
                    document.body.style.overflowY = 'auto'
                }
            })
        }
    }, [])

    const closeMenu = () => {
        const header = document.getElementsByTagName('header')[0]
        header.classList.remove('menu-active')
        setMenuIsActive(false)
        document.body.style.overflowY = 'auto'  
    }

    return (
        <nav>
            <List ref={navList}>
                <li><Link onClick={closeMenu} to='/'>Início</Link></li>
                <li><Link onClick={closeMenu} to='/about-me'>Sobre Mim</Link></li>
                <li><Link onClick={closeMenu} to='/projects'>Projetos</Link></li>
                <li><Link onClick={closeMenu} to='/skills'>Habilidades</Link></li>
                <li><Link onClick={closeMenu} to='/contact'>Contato</Link></li>
            </List>
        </nav>
    )
}