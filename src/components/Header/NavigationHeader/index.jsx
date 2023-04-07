import { useRef } from "react"
import { Link } from "react-router-dom"
import { List } from "./style"
import { useEffect } from "react"

export const NavigationHeader = () => {
    const navList = useRef()

    useEffect(() => {
        const ListItems = navList.current.childNodes
        const menuActive = document.getElementsByTagName('header')[0]
        
        ListItems.forEach((item) => {
            item.addEventListener('click', () => {
                if (menuActive) menuActive.classList.remove('menu-active')
            })
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