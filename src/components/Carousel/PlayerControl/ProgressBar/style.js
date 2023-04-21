import styled from "styled-components"

export const ProgressBarStyle = styled.div`
    width: ${props => props.percentageProgress}px;
    height: 100%;

    position: relative;

    background-color: var(--primary-color);

    transition: width 0.8s ease-in;

    &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;

        position: absolute;
        top: -100%;
        right: -3px;

        background-color: inherit;
    }
`