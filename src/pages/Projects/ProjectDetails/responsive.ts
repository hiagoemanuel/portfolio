import { Content, Informations, LinkButton, Links, ProjectDemo, ProjectAbout } from "./style";
import { createGlobalStyle } from "styled-components";

export const Responsive = createGlobalStyle`
    @media (max-width: 1000px) {
        ${Content} {
            flex-direction: column;
            align-items: center;
            gap: 30px;

            .return-btn { display: flex; }
        }

        ${ProjectDemo} { width: 300px; }

        ${ProjectAbout} {
            height: auto;
            justify-content: stretch;
            gap: 30px;
        }
    }

    @media (max-width: 580px) {
        ${Informations} {
            h2 { font-size: 2.8rem; }
            p { font-size: 1.8rem; }
        }

        ${LinkButton} { width: 100%; }
    }

    @media (max-width: 400px) {

        ${Links} { gap: 10px; }

        ${LinkButton} {
            font-size: 1.4rem;
            padding: 10px;
        }
    }

    @media (max-width: 335px) { ${ProjectDemo} { width: 100%; } }
`