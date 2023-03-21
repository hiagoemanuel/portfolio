import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`    
    html {
        font-size: 62.5%;
        font-family: 'Josefin Sans', sans-serif;;

        background-color: #ffffff;
        color: #000000;
    }

    #root {
        max-width: 100vw;
        max-height: 100vh;

        display: grid;
        grid-template-areas: 'header content';
        justify-content: flex-start;
    }

    header { grid-area: 'header'; }    

    main { grid-area: 'content'; }
`