import styled from "styled-components";

export const Content = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 800px) {
        flex-direction: column;
        gap: 25px;
    }

    @media (max-width: 450px) {
        justify-content: space-evenly;
    }
`

export const Presentation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 800px) {
        text-align: center;
        gap: 0px;
    }
`

export const Salutation = styled.h1`
    font-size: 8.6rem;
    font-weight: 500;

    @media (max-width: 1000px) {
        font-size: 7.6rem;
    }

    @media (max-width: 450px) {
        font-size: 4rem;
    }
`

export const Occupation = styled.h2`
    font-size: 3.2rem;
    font-weight: 400;

    @media (max-width: 1000px) {
        font-size: 2.6rem;
    }

    @media (max-width: 450px) {
        font-size: 2rem;
    }
`
