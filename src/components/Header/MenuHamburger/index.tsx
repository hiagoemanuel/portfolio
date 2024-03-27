import { HamburgerStyle } from "./style"

interface IProps {
    menuIsActive: boolean
    setMenuIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuHamburger = ({ menuIsActive, setMenuIsActive }: IProps) => {
    const toggleMenu = () => {
        const header = document.getElementsByTagName('header')[0]

        if (menuIsActive) {
            header.classList.remove('menu-active')
            setMenuIsActive(false)
            document.body.style.overflowY = 'auto'
        } else {
            header.classList.add('menu-active')
            setMenuIsActive(true)
            document.body.style.overflowY = 'hidden'
        }
    }

    return (
        <HamburgerStyle
            onClick={() => toggleMenu()}
            className={menuIsActive ? 'active' : 'not-active'}
        >
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
        </HamburgerStyle>
    )
}