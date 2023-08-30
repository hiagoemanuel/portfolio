import { ReactNode, createContext, useState } from "react";

const initialValue = {
    currentIllustration: 0,
    setCurrentIllustration: (newIllu: number) => { },
    progressBar: 0,
    setProgressBar: (newProgress: number) => { }
}

type PropsCarouselContext = {
    currentIllustration: number,
    setCurrentIllustration: (newIllu: number) => void,
    progressBar: number,
    setProgressBar: (newProgress: number) => void
}

type PropsProvider = { children: ReactNode }

export const CarouselContext = createContext<PropsCarouselContext>(initialValue)

export const CarouselProvider = ({ children }: PropsProvider) => {
    const [currentIllustration, setCurrentIllustration] = useState(0)
    const [progressBar, setProgressBar] = useState(0)

    return (
        <CarouselContext.Provider value={{ currentIllustration, setCurrentIllustration, progressBar, setProgressBar }}>
            {children}
        </CarouselContext.Provider>
    )
}