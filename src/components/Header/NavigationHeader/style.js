import styled from "styled-components";

export const List = styled.ul`
    li a {
        padding: 25px 0px;
        
        display: block;
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        color: var(--secondary-color);
        
        cursor: pointer;

        transition: all 0.3s 0.125s ease-out;
        background-image: linear-gradient(-30deg,  transparent 50%, var(--secondary-color) 0);
        background-size: 310%;
        background-position: 100%;
        @media (min-width: 744px) {
            &:hover {
                background-position: 0%;
                color: var(--primary-color);
            }
        }
    }
`