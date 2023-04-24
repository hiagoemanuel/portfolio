import styled from "styled-components";
import { Carousel } from "../../components/Carousel";
import { CarouselProvider } from "../../contexts/current-carousel";
import { Container, Occupation, Salutation } from "./style"

export const Home = () => (
    <Content>
        <Container>
            <Salutation>
                Olá,<br />
                eu sou<br />
                <strong>Hiago Emanuel</strong>
            </Salutation>
            <Occupation>
                Front-end Developer
            </Occupation>
        </Container>
        <CarouselProvider>
            <Carousel />
        </CarouselProvider>
    </Content>
)

const Content = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
