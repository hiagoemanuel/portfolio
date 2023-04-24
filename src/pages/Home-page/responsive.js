import { createGlobalStyle } from "styled-components";
import { Content, Occupation, Presentation, Salutation } from "./style";
import { Illustration } from "../../components/Carousel/style";

export const Responsive = createGlobalStyle`
    @media (max-width: 1000px) {
        ${Salutation} { font-size: 7.6rem; }
        ${Occupation} { font-size: 2.6rem; }
    }

    @media (max-width: 800px) {
        ${Content} {
            flex-direction: column;
            gap: 25px;
        }

        ${Presentation} {
            text-align: center;
            gap: 0px;
        }
    }

    @media (max-width: 450px) {
        ${Salutation} { font-size: 3.6rem; }
        ${Occupation} { font-size: 1.6rem; }

        ${Illustration} {
            width: 170px;
            height: 190px;
        }        
    }
`