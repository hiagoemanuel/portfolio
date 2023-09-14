import styled from "styled-components";

export const GridProjects = styled.div`
    width: 100%;
    height: 65vh;
    padding: 10px;

    overflow-y: scroll;

    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 320px);
    grid-auto-rows: 200px;
    gap: 50px 20px;

    a {
        border: 3px solid var(--primary-color);

        position: relative;

        img { width: 100%;}

        span {
            width: 100%;
            height: 50px;
            
            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            bottom: -3px;
            
            overflow: hidden;
            
            background-color: var(--primary-color);

            h3 {
                color: var(--secondary-color);
                font-size: 2.6rem;
            }
        }
    }

    @media (max-width: 385px) {
        grid-template-columns: 100%;
        grid-auto-rows: min-content;
        gap: 25px;

        a {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        a span {
            height: 35px;
            position: static;
        }

        a span h3 { font-size: 2rem; }
    }
`