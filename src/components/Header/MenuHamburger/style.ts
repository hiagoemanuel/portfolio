import styled from 'styled-components'
import { closeButton, openButton } from './animations'

export const HamburgerStyle = styled.div`
    width: 70px;
    height: 70px;

    display: none;
    flex-direction: column;
    justify-content: space-between;

    cursor: pointer;

    .line-1, .line-2, .line-3 {
        width: 100%;
        height: 10px;

        background-color: var(--secondary-color);
    }

    &.active {
        .line-1 { animation: ease 0.7s ${closeButton.top} forwards}
        .line-2 { animation: ease 0.7s ${closeButton.mid} forwards}
        .line-3 { animation: ease 0.7s ${closeButton.bot} forwards}
    }
    &.not-active {
        .line-1 { animation: ease 0.7s ${openButton.top} forwards}
        .line-2 { animation: ease 0.7s ${openButton.mid} forwards}
        .line-3 { animation: ease 0.7s ${openButton.bot} forwards}
    }
`