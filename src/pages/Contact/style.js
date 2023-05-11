import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    margin-bottom: 25px;

    position: relative;
`

export const MainContent = styled.div`
    display: flex;
    align-items: center;
    gap: 100px;

    .cat-illustration { max-width: 100%; }
`

export const PersonalContact= styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const ContactInformation = styled.a`
    display: flex;
    align-items: flex-end;

    h3 {
        width: max-content;
        font-size: 3.2rem;
    }
`

export const Footer = styled.footer`
    width: 100%;
    padding: 5px;

    position: absolute;
    bottom: calc(0px - 2%);
    left: 0px;
    
    display: flex;
    flex-direction: column;
    gap: 10px;

    h5 {
        font-size: 1.2rem;
        font-weight: 400px;
    }
`