import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`    
    * { transition: background-color 0.3s ease-in-out, color 0.1s ease-in }

    html {
        font-size: 62.5%;
        font-family: var(--primary-font);

        color: var(--primary-color);
    }

    #root {
        max-width: 100vw;
        max-height: 100vh;

        display: grid;
        grid-template-areas: 'header content';
        justify-content: flex-start;

        background-color: var(--secondary-color);
    }

    header { grid-area: 'header'; }    

    main { grid-area: 'content'; }
`