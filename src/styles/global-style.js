import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`    
    * { transition: background-color 0.3s ease-in-out, color 0.1s ease-in }

    html {
        font-size: 62.5%;
        font-family: var(--primary-font);

        color: var(--primary-color);
    }
    body {
        width: 100vw;
        height: 100vh;
    }

    #root {
        width: 100vw;
        height: 100vh;
        padding: 0 0 0 150px;

        background-color: var(--secondary-color);
    }
`