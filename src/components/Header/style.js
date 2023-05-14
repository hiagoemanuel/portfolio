import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 150px;
    height: 100vh;
    padding: 15px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    background-color: var(--primary-color);

    #logo div svg { max-width: 65px; }

    nav { width: calc(100% + 30px); }
`