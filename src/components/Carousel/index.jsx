import { useContext } from "react";
import { ReactSVG } from "react-svg";

import { homeCarousel } from "../../constants/home-carousel";

import { CarouselContext } from "../../contexts/current-carousel";
import { PlayerControl } from "./PlayerControl";

import { Container, Illustration } from "./style"

export const Carousel = () => {
    const { currentIllustration } = useContext(CarouselContext)

    return (
        <Container>
            <Illustration>
                <ReactSVG src={homeCarousel[currentIllustration]} />
            </Illustration>
            <PlayerControl carousel={homeCarousel} />
        </Container>
    )
}