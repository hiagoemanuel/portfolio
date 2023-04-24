import { Carousel } from "../../components/Carousel";
import { CarouselProvider } from "../../contexts/current-carousel";
import { Content, Presentation, Occupation, Salutation } from "./style"
import { Responsive } from "./responsive";

export const Home = () => (
    <Content>
        <Responsive />
        <Presentation>
            <Salutation>
                Olá,<br />
                eu sou<br />
                <strong>Hiago Emanuel</strong>
            </Salutation>
            <Occupation>
                Front-end Developer
            </Occupation>
        </Presentation>
        <CarouselProvider>
            <Carousel />
        </CarouselProvider>
    </Content>
)


