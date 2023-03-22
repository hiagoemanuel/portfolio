import { createGlobalStyle } from 'styled-components'

export const Variables = createGlobalStyle`
    :root {
        --primary-font: 'Josefin Sans', sans-serif;

        --primary-color: ${props => props.theme.primaryColor};
        --secondary-color: ${props => props.theme.secondaryColor};
    }
`