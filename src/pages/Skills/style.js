import styled from "styled-components";

export const ContentContainer = styled.div`
    display: flex;
    gap: 40px;

    position: relative;

    .owl-illu {
        position: absolute;
        right: 0;
        bottom: 0;
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
`

export const Skill = styled.div`
    width: 120px;
    height: 115px;
    padding: 20px;
    border: 5px solid ${(props) => props.selected ? 'var(--primary-color)' : 'transparent'};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    div { width: 100%; }

    div svg {
        width: -webkit-fill-available;
        height: 100%;
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
`

export const SkillIntroduction = styled.p`
    max-width: 625px;

    font-size: 2.4rem;
    font-weight: 400;
    text-align: justify;
`