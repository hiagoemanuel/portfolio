import { Carousel } from "../../components/Carousel";
import { CarouselProvider } from "../../contexts/current-carousel";

import { Content, Occupation, Presentation, Salutation } from "./style"

export const Home = () => (
    <Content>
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


