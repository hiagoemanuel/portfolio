import React, { useContext, useEffect } from "react"
import { ProgressBarStyle } from './style'
import { CarouselContext } from "../../../../contexts/current-carousel"

type ComponentProps = {
    pauseStatus: boolean,
    bar: React.RefObject<HTMLDivElement>,
    carousel: string[]
}

export const ProgressBar = ({ pauseStatus, bar, carousel }: ComponentProps) => {
    const { currentIllustration, setCurrentIllustration, progressBar, setProgressBar } = useContext(CarouselContext)
    const carouselTimer: number = 10 // seconds

    useEffect(() => {
        let timer: number

        if (bar.current !== null) {
            const barWidth = bar.current.clientWidth

            if (!pauseStatus) {
                timer = setInterval(() => {
                    setProgressBar(
                        progressBar + (Number(carouselTimer.toFixed().concat('000')) / (carouselTimer * carouselTimer * 5))
                    ) // a + (b / (c * c * d))

                    if (progressBar >= barWidth) {
                        if (currentIllustration >= carousel.length - 1) {
                            setCurrentIllustration(0)
                        } else {
                            setCurrentIllustration(currentIllustration + 1)
                        }
                        setProgressBar(0)
                    }
                }, 1000)
            }
        }

        return () => clearInterval(timer)
    }, [pauseStatus, bar, carousel, progressBar, setProgressBar, currentIllustration, setCurrentIllustration])

    return <ProgressBarStyle $percentageProgress={progressBar} />
}
