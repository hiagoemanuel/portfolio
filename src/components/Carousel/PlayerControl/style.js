import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`

export const ScrollBarPlayer = styled.div`
    width: 200px;
    height: 2px;

    background-color: var(--tertiary-color);
`

export const ProgressBar = styled.div`
    width: 20px;
    height: 100%;

    position: relative;

    background-color: var(--primary-color);

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

export const PlayerControl = styled.div`
    display: flex;
    gap: 25px;
    svg { cursor: pointer; }
`