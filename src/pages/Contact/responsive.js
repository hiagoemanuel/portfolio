import { Container } from "../../styles/global-components";

import { ContactInformation, Footer, MainContent, PersonalContact } from "./style";
import { createGlobalStyle } from "styled-components";

export const Responsive = createGlobalStyle`
    @media (max-width: 1000px) {
        ${Container} { position: relative; }

        ${Footer} { bottom: calc(-5% - 40px); }
    }

    @media (max-width: 835px) {
        ${MainContent} {
            flex-direction: column-reverse;
            gap: 10px;
        }

        ${Footer} {
            align-items: center;
        }
    }

    @media (max-width: 440px) {
        ${PersonalContact} svg {
            width: 50px;
            height: 50px;
        }

        ${ContactInformation} h3 { font-size: 2.2rem; }

        ${MainContent} .cat-illustration div svg { width: 260px; }
    }
`