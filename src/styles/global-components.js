import styled from "styled-components";

export const MainTitle = styled.h1`
    margin-bottom: 50px;

    font-size: 6rem;
    font-weight: 700;

    align-self: center;

    @media (max-width: 1000px) {
        font-size: 7.2rem;
        text-align: center;
        margin-bottom: 30px;
    }

    @media(max-width: 580px) { font-size: 3.6rem; }
`