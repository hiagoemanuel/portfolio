import { createContext, useState } from "react";

export const CarouselContext = createContext({})

export const CarouselProvider = ({ children }) => {
    const [currentIllustration, setCurrentIllustration] = useState(0)
    const [progressBar, setProgressBar] = useState(0)

    return (
        <CarouselContext.Provider value={{ currentIllustration, setCurrentIllustration, progressBar, setProgressBar}}>
            {children}
        </CarouselContext.Provider>
    )
}