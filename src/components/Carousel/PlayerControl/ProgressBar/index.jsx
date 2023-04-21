import { useContext, useEffect } from "react"
import { ProgressBarStyle } from './style'
import { CarouselContext } from "../../../../contexts/current-carousel"
import { illustration } from "../../../../constants/illustrations"


export const ProgressBar = ({ pauseStatus, bar }) => {
    const { currentIllustration, setCurrentIllustration, progressBar, setProgressBar } = useContext(CarouselContext)
    const carouselTimer = 10 // seconds

    useEffect(() => {
        let timer = null
        const barWidth = bar.current.clientWidth

        if (!pauseStatus) {
            timer = setInterval(() => {
                setProgressBar(progressBar + (carouselTimer.toFixed().concat('000') / (carouselTimer * carouselTimer * 5))) // a + (b / (c * c * d))

                if (progressBar >= barWidth) {
                    setCurrentIllustration(prevCurrentIllustration => {
                        if (prevCurrentIllustration >= illustration.length - 1) {
                            return 0
                        } else {
                            return prevCurrentIllustration + 1
                        }
                    })
                    
                    setProgressBar(0)
                }
            }, 1000)
        }

        return () => clearInterval(timer)
    }, [pauseStatus, bar, progressBar, setProgressBar, currentIllustration, setCurrentIllustration])

    return <ProgressBarStyle percentageProgress={progressBar} />
}
