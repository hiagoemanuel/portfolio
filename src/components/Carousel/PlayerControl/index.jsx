import { PreviousButton, PauseButton, NextButton, } from "../../../constants/vectors"
import { Container, ScrollBarPlayer, ProgressBar, PlayerControl } from "./style"

export const Player = () => {
    return (
        <Container>
            <ScrollBarPlayer>
                <ProgressBar/>
            </ScrollBarPlayer>
            <PlayerControl>
                <PreviousButton />
                <PauseButton />
                <NextButton />
            </PlayerControl>
        </Container>
    )
}