import { createGlobalStyle } from "styled-components";
import { Discription, MainContent, ProfilePhoto } from "./style";

export const Responsive = createGlobalStyle`
    @media (max-width: 1200px) {
        
        ${MainContent} {
            flex-direction: column-reverse;
            justify-content: flex-end;
            align-items: center;
        }

        ${ProfilePhoto} { width: 50%; }

        ${Discription} { max-width: max-content;}
    }

    @media (max-width: 580px) { ${Discription} p { font-size: 1.6rem; } }

    @media (max-width: 525px) {
        ${ProfilePhoto} {
            max-width: 70%;

            box-shadow: -20px -20px var(--primary-color);
            margin: 20px 0 0 20px;
        }

        ${Discription} svg {
            width: 60px;
            height: 100px;
        }
    }

    @media (max-width: 320px) { ${Discription} svg { display: none; } }
`