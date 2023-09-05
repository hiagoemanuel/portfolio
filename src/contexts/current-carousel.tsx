import { ReactNode, createContext, useState } from "react";

type PropsCarouselContext = {
    currentIllustration: number,
    setCurrentIllustration: (newIllu: number) => void,
    progressBar: number,
    setProgressBar: (newProgress: number) => void
}


export const CarouselContext = createContext<PropsCarouselContext>({
    currentIllustration: 0,
    setCurrentIllustration: () => { },
    progressBar: 0,
    setProgressBar: () => { }
})

type PropsProvider = { children: ReactNode }

export const CarouselProvider = ({ children }: PropsProvider) => {
    const [currentIllustration, setCurrentIllustration] = useState(0)
    const [progressBar, setProgressBar] = useState(0)

    return (
        <CarouselContext.Provider value={{ currentIllustration, setCurrentIllustration, progressBar, setProgressBar }}>
            {children}
        </CarouselContext.Provider>
    )
}

