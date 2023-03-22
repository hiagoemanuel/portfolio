import { useRef, useEffect } from 'react'
import { MainTheme } from './MainTheme'
import { LogoIcon } from '../../constants/vectors'
import { Link, useLocation } from 'react-router-dom'
import { HeaderStyle, List } from './style.js'

export const Header = () => {
    const navList = useRef()
    const currentPath = useLocation()

    useEffect(() => {
        navList.current.childNodes.forEach(item => {
            item.addEventListener('click', () => {
                const currentPage = document.getElementsByClassName('current-page')[0]
                if (currentPage) currentPage.classList.remove('current-page')
                item.classList.add('current-page')
            })
        })
    }, [])

    useEffect(() => {
        navList.current.childNodes.forEach((item) => {
            if (currentPath.pathname === item.childNodes[0].pathname) item.classList.add('current-page')
        })
    }, [currentPath])

    return (
        <HeaderStyle>
            <LogoIcon />
            <nav>
                <List ref={navList}>
                    <li><Link to='/'>Início</Link></li>
                    <li><Link to='/about-me'>Sobre Mim</Link></li>
                    <li><Link to='/projects'>Projetos</Link></li>
                    <li><Link to='/skills'>Habilidades</Link></li>
                    <li><Link to='/contact'>Contato</Link></li>
                </List>
            </nav>
            <MainTheme />
        </HeaderStyle>
    )
}