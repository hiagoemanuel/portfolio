import { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        color: var(--primary-color);
        text-decoration: none;
    }

    li { list-style-type: none; }

    button {
        background-color: transparent;
        border: none;   
    }
`