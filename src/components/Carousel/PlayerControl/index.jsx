import { useContext, useRef, useState } from "react"
import { PreviousButton, PauseButton, NextButton, PlayButton, } from "../../../constants/icons"
import { Container, Bar, Controls } from "./style"
import { CarouselContext } from "../../../contexts/current-carousel"
import { illustration } from "../../../constants/carousel-illustrations"
import { ProgressBar } from "./ProgressBar"

export const PlayerControl = () => {
    const { setCurrentIllustration, setProgressBar } = useContext(CarouselContext)
    const [isPaused, setIsPaused] = useState(false)
    const barDOM = useRef()

    const nextIllustration = () => {
        setCurrentIllustration(prevCurrentIllustration => {
            if (prevCurrentIllustration >= illustration.length - 1) {
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
                return illustration.length - 1
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
                <ProgressBar pauseStatus={isPaused} bar={barDOM} />
            </Bar>
            <Controls>
                <button onClick={previousIllustration}><PreviousButton /></button>
                <button onClick={handlePausePlay}>{isPaused ? <PlayButton /> : <PauseButton />}</button>
                <button onClick={nextIllustration}><NextButton /></button>
            </Controls>
        </Container>
    )
}