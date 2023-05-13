import { createGlobalStyle } from "styled-components";
import { GridProjects } from "./style";

export const Responsive = createGlobalStyle`
    @media (max-width: 385px) {
        ${GridProjects} {
            grid-template-columns: 100%;
            grid-auto-rows: min-content;
            gap: 25px;
        }

        ${GridProjects} a {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        ${GridProjects} a span {
            height: 35px;
            position: static;
        }

        ${GridProjects} a span h3 { font-size: 2rem; }
    }
`