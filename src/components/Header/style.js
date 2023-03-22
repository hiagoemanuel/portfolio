import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 150px;
    min-height: 100vh;
    padding: 15px 0px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    background-color: var(--primary-color);

    nav { width: 100% }
`

export const List = styled.ul`
    .current-page a {
        background-position: 0%;
        color: var(--primary-color);
    }

    li a {
        padding: 25px 0px;
        
        display: block;
        text-align: center;
        
        font-size: 2rem;
        font-weight: bold;
        color: var(--secondary-color);
        
        cursor: pointer;
        transition: all 0.3s 0.125s ease-out;
        background-image: linear-gradient(-30deg,  transparent 50%, var(--secondary-color) 0);
        background-size: 298%;
        background-position: 100%;

        &:hover {
            background-position: 0%;
            color: var(--primary-color);
        }
    }
`