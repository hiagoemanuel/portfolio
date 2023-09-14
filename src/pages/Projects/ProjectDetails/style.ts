import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 25px;

    .return-btn {
        width: 50px;
        height: 50px;

        display: none;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 10px;
        left: 10px;

        background-color: var(--primary-color);
        color: var(--secondary-color);
        font-size: 5rem;
        font-weight: 700;
    }

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        gap: 30px;

        .return-btn { display: flex; }
    }
`

export const ProjectDemo = styled.img`
    max-width: 400px;

    border: 3px solid var(--primary-color);

    @media (max-width: 1000px) {
        width: 300px;
    }

    @media (max-width: 335px) { width: 100%; }
`

export const ProjectAbout = styled.div`
    max-width: 600px;
    height: 400px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1000px) {
        height: auto;
        justify-content: stretch;
        gap: 30px;
    }
`

export const Informations = styled.div`
    h2 {
        font-size: 4.8rem;
        margin-bottom: 15px;
    }

    p {
        font-size: 2.4rem;
        text-align: justify;
    }

    @media (max-width: 580px) {
        h2 { font-size: 2.8rem; }
        p { font-size: 1.8rem; }
    }
`

export const Links = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 20px;

    @media (max-width: 400px) {
        gap: 10px;
    }
`

export const LinkButton = styled.a`
    padding: 20px 10px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2rem;
    font-weight: 700;

    background-color: var(--primary-color);
    color: var(--secondary-color);

    svg {
        width: 18px;
        height: 18px;
        margin-right: 10px;

        path { fill: var(--secondary-color) }
    }

    @media (max-width: 580px) {
        width: 100%;
    }

    @media (max-width: 400px) {
        font-size: 1.4rem;
        padding: 10px;
    }
`