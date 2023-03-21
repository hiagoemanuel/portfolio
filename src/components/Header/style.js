import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 150px;
    min-height: 100vh;
    padding: 15px 0px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    background-color: black;

    nav { width: 100% }
`

export const List = styled.ul`
    .current-page a {
        background-position: 0%;
        color: #000000;
    }

    li a {
        padding: 25px 0px;
        
        display: block;
        text-align: center;
        
        font-size: 2rem;
        font-weight: bold;
        color: #ffffff;
        
        cursor: pointer;
        transition: all 0.3s 0.125s ease-out;
        background-image: linear-gradient(-30deg,  transparent 50%, #ffffff 0);
        background-size: 298%;
        background-position: 100%;

        &:hover {
            background-position: 0%;
            color: #000000;
        }
    }
`

export const MainTheme = styled.div`
    cursor: pointer;
    margin-left: 15px;
    align-self: flex-start;
`