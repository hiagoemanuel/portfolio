import { Illustrations } from "./Illustrations";
import { Player } from "./PlayerControl";
import { Container } from "./style"

export const Carousel = () => {
    return (
        <Container>
            <Illustrations />
            <Player />
        </Container>
    )
}