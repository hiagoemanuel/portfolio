import { useContext, useRef, useState } from "react"
import { ReactSVG } from "react-svg"

import { CarouselContext } from "../../../contexts/current-carousel"
import { ProgressBar } from "./ProgressBar"

import { Container, Bar, Controls } from "./style"

export const PlayerControl = ({ carousel }) => {
    const { setCurrentIllustration, setProgressBar } = useContext(CarouselContext)
    const [isPaused, setIsPaused] = useState(false)
    const barDOM = useRef()

    const nextIllustration = () => {
        setCurrentIllustration(prevCurrentIllustration => {
            if (prevCurrentIllustration >= carousel.length - 1) {
                return 0
            } else {
                return prevCurrentIllustration + 1
            }
        })
        setProgressBar(0)
    }

    const previousIllustration = () => {
        setCurrentIllustration(prevCurrentIllustration => {
            if (prevCurrentIllustration === 0) {
                return carousel.length - 1
            } else {
                return prevCurrentIllustration - 1
            }
        })
        setProgressBar(0)
    }

    const handlePausePlay = () => setIsPaused(prevIsPaused => !prevIsPaused)

    return (
        <Container>
            <Bar ref={barDOM} >
                <ProgressBar pauseStatus={isPaused} bar={barDOM} carousel={carousel} />
            </Bar>
            <Controls>
                <button onClick={previousIllustration}><ReactSVG src="images/icons/player-control/previous-button.svg" /></button>
                <button onClick={handlePausePlay}>{isPaused ? <ReactSVG src="images/icons/player-control/play-button.svg" /> : <ReactSVG src="images/icons/player-control/pause-button.svg" />}</button>
                <button onClick={nextIllustration}><ReactSVG src="images/icons/player-control/next-button.svg" /></button>
            </Controls>
        </Container>
    )
}