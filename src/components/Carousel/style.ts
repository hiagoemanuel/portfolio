import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
`

export const Illustration = styled.div`
    div div {
        width: 400px;
        height: 450px;

        display: flex;
        justify-content: center;
        align-items: center;
        
        @media (max-width: 450px) {                 
            width: 200px;
            height: 210px;
        }
    }

`