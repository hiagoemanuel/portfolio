import styled from 'styled-components'

export const Menu = styled.div`
    width: 70px;
    height: 70px;

    display: none;
    flex-direction: column;
    justify-content: space-between;

    cursor: pointer;

    .line-1, .line-2, .line-3 {
        width: 100%;
        height: 10px;
        transition: 0.3s;

        background-color: var(--secondary-color);
    }
`