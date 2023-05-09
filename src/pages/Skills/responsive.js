import { createGlobalStyle } from "styled-components";
import { ContentContainer, IconContainer, Skill, SkillIntroduction, SkillName } from "./style";

export const Responsive = createGlobalStyle`
    @media (max-width: 1250px) {
        .illustration {
            width: 150px;
            height: fit-content;
        }
    }

    @media (max-width: 750px) {
        ${ContentContainer} {
            flex-direction: column;
            align-items: center;
        }

        ${IconContainer} {
            width: 70vw;
            height: 145px;
            padding: 0 15px;
            border-right: none;
            border-bottom: 2px solid var(--primary-color);

            flex-direction: row;

            overflow: scroll hidden;
        }

        ${SkillName} {
            text-align: center;

            span {
                display: block;
                margin: auto;
            }
        }
        
        .illustration { display: none; }
    }

    @media (max-width: 540px) {
        ${IconContainer} {
            height: 85px;
        }

        ${Skill} {
            width: 65px;
            height: 60px;
            padding: 10px;
        }

        ${SkillName} {
            font-size: 2.8rem;
            margin-bottom: 35px;

            span { font-size: 1.8rem; }
        }
    }

    @media (max-width: 400px) {
        ${SkillIntroduction} { font-size: 1.6rem; }
    }
` 