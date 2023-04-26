import { createGlobalStyle } from "styled-components";
import { GridProjects } from "./style";

export const Responsive = createGlobalStyle`
    @media (max-width: 580px) {
        ${GridProjects} {
            grid-template-columns:  100%;
            grid-auto-rows: max-content;
            gap: 25px;
        }
    }

    @media (max-width: 400px) {
        ${GridProjects} a span { height: 35px; }

        ${GridProjects} a span h3 { font-size: 2rem; }   
    }
`