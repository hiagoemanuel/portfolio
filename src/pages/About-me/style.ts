import styled from "styled-components"

export const MainContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 50px;

    position: relative;

    @media (max-width: 1200px) {
        flex-direction: column-reverse;
        justify-content: flex-end;
        align-items: center;
    }
`

export const ProfilePhoto = styled.img`
    width: 30vw;
    margin: 25px 0 0 25px;

    box-shadow: -25px -25px var(--primary-color);
    filter: grayscale(1);

    @media (max-width: 1200px) {
        width: 50%;
    }

    @media (max-width: 525px) {
        max-width: 70%;

        box-shadow: -20px -20px var(--primary-color);
        margin: 20px 0 0 20px;
    }
`

export const Discription = styled.div`
    max-width: 590px;

    p {
        font-size: 2.4rem;
        font-weight: 400;
        text-align: justify;

        @media (max-width: 580px) {
            font-size: 1.6rem;
        }
    }

    svg {
        position: absolute;
        right: 0px;
        bottom: 0px;

        @media (max-width: 525px) {
            width: 60px;
            height: 100px;
        }

        @media (max-width: 320px) {
            display: none;
        }
    }

    @media (max-width: 1200px) {
        max-width: max-content;
    }
`