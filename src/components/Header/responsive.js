import { ThemeButtonStyle } from './MainThemes/style'
import { HamburgerStyle } from './MenuHamburger/style'

import { createGlobalStyle } from 'styled-components'
import { HeaderStyle } from './style'

export const Responsive = createGlobalStyle`
    @media (max-width: 1000px) {
        ${HeaderStyle} {
            width: 100vw;
            height: 100px;
            padding: 15px 50px;

            flex-direction: row;
            ${ThemeButtonStyle}, nav { display: none; }

            ${HamburgerStyle} { display: flex; }

            &.menu-active {
                width: 100vw;
                height: 100vh;
                padding: 50px 30px;

                background-color: var(--secondary-color);
                ul li a, path {
                    color: var(--primary-color);
                    fill: var(--primary-color);
                }

                flex-direction: column;
                overflow: hidden;
                z-index: 1000;
                
                #logo div svg { max-width: 12rem; }

                ${ThemeButtonStyle}, nav { display: block; }

                nav { width: auto; }
                
                ${HamburgerStyle} {
                    position: absolute;
                    top: 15px;
                    right: 50px;
                    
                    .line-1, .line-2, .line-3 { background-color: var(--primary-color); }

                    .line-1 { transform: rotate(45deg) translate(30%, 22px); }
                    .line-2 { opacity: 0; }
                    .line-3 { transform: rotate(-45deg) translate(30%, -22px); }
                }
            }
        }
    }

    @media (max-width: 400px) {
        ${HeaderStyle} {
            height: 60px;
            padding: 15px 20px;

            #logo div svg { width: 30px; }

            ${HamburgerStyle} {
                width: 30px;
                height: 30px;

                .line-1, .line-2, .line-3 { height: 5px; }
            }

            &.menu-active {
                #logo div svg { width: 10rem; }

                nav { font-size: 48rem; }

                ${HamburgerStyle} {
                    top: 15px;
                    right: 20px;

                    .line-1 { transform: rotate(45deg) translate(30%, 9px); }
                    .line-3 { transform: rotate(-45deg) translate(30%, -9px); }
                }
            }
        }
    }
`