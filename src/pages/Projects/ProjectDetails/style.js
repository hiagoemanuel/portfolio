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
        top: 5%;
        left: 5%;

        background-color: var(--primary-color);
        color: var(--secondary-color);
        font-size: 5rem;
        font-weight: 700;
    }
`

export const ProjectDemo = styled.img`
    max-width: 400px;
    height: 400px;

    border: 3px solid var(--primary-color);
`

export const ProjectAbout = styled.div`
    max-width: 600px;
    height: 400px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
`

export const Links = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 20px;
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
`