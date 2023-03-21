import { useRef, useEffect } from 'react'
import { DarkModeIcon, /* LightModeIcon, */ LogoIcon } from '../../constants/vectors'
import { Link } from 'react-router-dom'
import { HeaderStyle, List, MainTheme } from './style.js'


const Header = () => {
    const NavList = useRef()

    useEffect(() => {
        NavList.current.childNodes.forEach(item => {
            item.addEventListener('click', () => {
                const currentPage = document.getElementsByClassName('current-page')[0]
                if (currentPage) currentPage.classList.remove('current-page')
                item.classList.add('current-page')
            })
        })
    }, [])

    return (
        <HeaderStyle>
            <LogoIcon />
            <nav>
                <List ref={NavList}>
                    <li><Link to='/'>Início</Link></li>
                    <li><Link to='/about-me'>Sobre Mim</Link></li>
                    <li><Link to='/projects'>Projetos</Link></li>
                    <li><Link to='/skills'>Habilidades</Link></li>
                    <li><Link to='/contact'>Contato</Link></li>
                </List>
            </nav>
            <MainTheme>
                <DarkModeIcon />
                {/* <LightModeIcon /> */}
            </MainTheme>
        </HeaderStyle>
    )
}

export { Header }
