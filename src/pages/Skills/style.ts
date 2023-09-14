import styled from "styled-components";

export const ContentContainer = styled.div`
    display: flex;
    gap: 40px;

    position: relative;

    .owl-illu {
        position: absolute;
        right: 0;
        bottom: 0;

        @media (max-width: 1250px) {
            width: 150px;
            height: fit-content;
        }

        @media (max-width: 830px) { display: none; }
    }
    
    @media (max-width: 830px) {
        flex-direction: column;
        align-items: center;
    }
`

export const IconContainer = styled.div`
    width: 150px;
    height: 460px;
    padding: 15px 0;
    border-right: 2px solid var(--primary-color);

    overflow: hidden scroll;

    display: flex;
    flex-direction: column;
    gap: 50px;

    @media (max-width: 830px) {
        width: 70vw;
        height: 145px;
        padding: 0 15px;
        border-right: none;
        border-bottom: 2px solid var(--primary-color);

        flex-direction: row;

        overflow: scroll hidden;
    }

    @media (max-width: 540px) { height: 85px; }
`

export const Skill = styled.div<{ $selected: boolean }>`
    width: 120px;
    height: 115px;
    padding: 20px;
    border: 5px solid ${(props) => props.$selected ? 'var(--primary-color)' : 'transparent'};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    div { width: 100%; }

    div svg {
        width: -webkit-fill-available;
        height: 100%;
    }
    
    @media (max-width: 540px) {
        width: 65px;
        height: 60px;
        padding: 10px;
    }
`

export const SkillName = styled.h2`
    margin-bottom: 30px;

    font-size: 4.8rem;
    font-weight: 700;

    span {
        margin-left: 5px;

        font-size: 2.4rem;
        font-weight: 400;
    }

    @media (max-width: 830px) {
        text-align: center;

        span {
            display: block;
            margin: auto;
        }
    }

    @media (max-width: 540px) {
        font-size: 2.8rem;
        margin-bottom: 35px;

        span { font-size: 1.8rem; }
    }
`

export const SkillIntroduction = styled.p`
    max-width: 625px;

    font-size: 2.4rem;
    font-weight: 400;
    text-align: justify;

    @media (max-width: 400px) { font-size: 1.6rem; }
`