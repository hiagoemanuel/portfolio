import { useEffect, useContext, useState } from "react";
import { ReactSVG } from "react-svg";

import { CarouselContext } from "../../contexts/current-carousel";
import { PlayerControl } from "./PlayerControl";

import { Container, Illustration } from "./style"

export const Carousel = () => {
    const { currentIllustration } = useContext(CarouselContext)
    const [illustrations, setIllustrations] = useState()

    useEffect(() => {
        const data = async () => {
            const response = await fetch('/data/home-carousel.json')
            const json = await response.json()
            setIllustrations(json)
        }
        data()
    }, [])

    return (
        illustrations ? <Container>
            <Illustration>
                <ReactSVG src={illustrations[currentIllustration]} />
            </Illustration>
            <PlayerControl carousel={illustrations} />
        </Container> : ''
    )
}