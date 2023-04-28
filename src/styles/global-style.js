import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{ scroll-behavior: smooth; }

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

        background-color: var(--secondary-color);
    }

    *::-webkit-scrollbar { width: 6px; }
    
    *::-webkit-scrollbar-track { background: var(--secondary-color); }

    * { scrollbar-color: var(--secondary-color); }

    *::-webkit-scrollbar-thumb {
        background-color: var(--primary-color);
        border: 1px solid var(--secondary-color);
    }
`