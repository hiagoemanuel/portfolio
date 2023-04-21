import { useContext } from "react";
import { illustration } from "../../constants/illustrations";
import { CarouselContext } from "../../contexts/current-carousel";
import { PlayerControl } from "./PlayerControl";
import { Container, Illustration } from "./style"

export const Carousel = () => {
    const {currentIllustration} = useContext(CarouselContext)
    
    return (
        <Container>
            <Illustration>
                {illustration[currentIllustration]()}
            </Illustration>
            <PlayerControl />
        </Container>
    )
}