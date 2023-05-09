import styled from "styled-components"

export const MainContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 50px;

    position: relative;
`

export const ProfilePhoto = styled.img`
    width: 35%;
    margin: 25px 0 0 25px;

    box-shadow: -25px -25px var(--primary-color);
    filter: grayscale(1);
`

export const Discription = styled.div`
    width: 590px;

    p {
        font-size: 2.4rem;
        font-weight: 400;
        text-align: justify;
    }

    svg {
        position: absolute;
        right: 0px;
        bottom: 0px;
    }
`