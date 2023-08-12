import { useContext, useRef, useState } from "react"

import { CarouselContext } from "../../../contexts/current-carousel"

import { ReactComponent as NEXTSVG } from '../../../assets/icons/player-control/next-button.svg'
import { ReactComponent as PAUSESVG } from '../../../assets/icons/player-control/pause-button.svg'
import { ReactComponent as PLAYSVG } from '../../../assets/icons/player-control/play-button.svg'
import { ReactComponent as PrevSVG } from '../../../assets/icons/player-control/previous-button.svg'
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
                <button onClick={previousIllustration}><PrevSVG /></button>
                <button onClick={handlePausePlay}>{isPaused ? <PLAYSVG /> : <PAUSESVG />}</button>
                <button onClick={nextIllustration}><NEXTSVG /></button>
            </Controls>
        </Container>
    )
}