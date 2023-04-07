import { createGlobalStyle } from 'styled-components'

import { HeaderStyle } from '../components/Header/style'
import { Menu } from '../components/Header/MenuHamburger/style'
import { ButtonStyle } from '../components/Header/MainTheme/style'

export const Responsive = createGlobalStyle`
    @media (max-width: 744px) {
        #root { padding: 100px 0 0 0;}

        ${HeaderStyle} {
            width: 100vw;
            height: 100px;
            padding: 15px 50px;

            flex-direction: row;

            ${ButtonStyle}, nav { display: none; }

            ${Menu} { display: flex; }

            &.menu-active {
                width: 100vw;
                height: 100vh;
                padding:  15px;

                flex-direction: column;
                overflow: hidden;

                .logo-icon { max-width: 150px; }

                ${ButtonStyle}, nav { display: block; }

                ${Menu} {
                    position: absolute;
                    top: 15px;
                    right: 50px;

                    .line-1 { transform: rotate(45deg) translate(30%, 22px); }
                    .line-2 { opacity: 0; }
                    .line-3 { transform: rotate(-45deg) translate(30%, -22px); }
                }
            }
        }
    }
`