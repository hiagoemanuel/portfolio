import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`

export const Bar = styled.div`
    width: 200px;
    height: 2px;

    background-color: var(--tertiary-color);
`

export const Controls = styled.div`
    display: flex;
    gap: 25px;
    
    button {
        user-select: none;
        cursor: pointer;
    }
`