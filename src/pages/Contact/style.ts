import styled from "styled-components";

export const MainContent = styled.div`
    display: flex;
    align-items: center;
    gap: 100px;

    .cat-illu {
        max-width: 100%;

        @media (max-width: 440px) { width: 260px; }
    }

    @media (max-width: 835px) {
        flex-direction: column-reverse;
        gap: 10px;
    }
`

export const PersonalContact= styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 440px) {
        svg {
            width: 50px;
            height: 50px;
        }
    }
`

export const ContactInformation = styled.a`
    display: flex;
    align-items: flex-end;

    h3 {
        width: max-content;
        font-size: 3.2rem;

        @media (max-width: 440px) { font-size: 2.2rem; }
    }
`

export const Footer = styled.footer`
    width: 100%;
    padding: 5px;

    position: absolute;
    bottom: 0px;
    left: 0px;
    
    display: flex;
    flex-direction: column;
    gap: 10px;

    h5 {
        font-size: 1.2rem;
        font-weight: 400px;
    }

    @media (max-width: 1000px) { bottom: calc(-5% - 40px); }

    @media (max-width: 835px) { align-items: center; }
`