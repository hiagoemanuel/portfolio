import { useContext, useRef, useState } from "react"

import { CarouselContext } from "../../../contexts/current-carousel"

import { ReactComponent as NEXTSVG} from '../../../assets/icons/player-control/next-button.svg'
import { ReactComponent as PAUSESVG} from '../../../assets/icons/player-control/pause-button.svg'
import { ReactComponent as PLAYSVG} from '../../../assets/icons/player-control/play-button.svg'
import { ReactComponent as PrevSVG} from '../../../assets/icons/player-control/previous-button.svg'
import { ProgressBar } from "./ProgressBar"

import { Container, Bar, Controls } from "./style"

type ComponentProps = { carousel: string[] }

export const PlayerControl = ({ carousel }: ComponentProps) => {
    const { currentIllustration, setCurrentIllustration, setProgressBar } = useContext(CarouselContext)
    const [isPaused, setIsPaused] = useState<boolean>(false)
    const barDOM = useRef<HTMLDivElement>(null)

    const nextIllustration = () => {
        if (currentIllustration >= carousel.length - 1) {
            setCurrentIllustration(0)
        } else {
            setCurrentIllustration(currentIllustration + 1)
        }
        setProgressBar(0)

    }

    const previousIllustration = () => {
        if (currentIllustration === 0) {
            setCurrentIllustration(carousel.length - 1)
        } else {
            setCurrentIllustration(currentIllustration - 1)
        }
        setProgressBar(0)
    }

    const handlePausePlay = () => setIsPaused(prevIsPaused => !prevIsPaused)

    return (
        <Container>
            <Bar ref={barDOM}>
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