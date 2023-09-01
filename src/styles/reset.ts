import { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        &::selection {
            background-color: var(--primary-color);
            color: var(--secondary-color);
        }
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