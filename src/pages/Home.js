import styled from "styled-components";
import { Presetation } from "../components/Presentation";
import { Carousel } from "../components/Carousel";

export const Home = () => (
    <ContainerContent>
        <Presetation />
        <Carousel />
    </ContainerContent> 
)

const ContainerContent = styled.section`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;
`