import styled from "styled-components";

import { ThemeButtonStyle } from "./MainThemes/style";
import { HamburgerStyle } from "./MenuHamburger/style";

export const HeaderStyle = styled.header`
    width: 150px;
    height: 100vh;
    padding: 15px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    background-color: var(--primary-color);

    svg { max-width: 65px; }

    nav { width: calc(100% + 30px); }

    @media (max-width: 1000px) {
        width: 100vw;
        height: 100px;
        padding: 15px 50px;

        position: static;
        
        flex-direction: row;
        ${ThemeButtonStyle}, nav { display: none; }

        ${HamburgerStyle} { display: flex; }

        &.menu-active {
            width: 100vw;
            height: 100vh;
            padding: 50px 30px;

            position: absolute;
            top: 0;
            left: 0;

            background-color: var(--secondary-color);
            
            ul li a, path {
                color: var(--primary-color);
                fill: var(--primary-color);
            }

            flex-direction: column;
            z-index: 1000;
            
            svg { max-width: 12rem; }

            ${ThemeButtonStyle}, nav { display: block; }

            nav { width: auto; }
            
            ${HamburgerStyle} {
                position: absolute;
                top: 15px;
                right: 50px;
                
                .line-1, .line-2, .line-3 { background-color: var(--primary-color); }
            }
        }
    }

    @media (max-width: 400px) {
        height: 60px;
        padding: 15px 20px;

        .logo { width: 30px; }

        ${HamburgerStyle} {
            scale: .5;
        }

        &.menu-active {
            .logo { width: 10rem; }

            nav { font-size: 48rem; }

            ${HamburgerStyle} {
                top: 15px;
                right: 20px;
            }
        }
    }
`