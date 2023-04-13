import { Container, Occupation, Salutation } from "./style"

export const Presetation = () => {
    return (
        <Container>
            <Salutation>
                Olá,<br />
                eu sou<br />
                <strong>Hiago Emanuel</strong>
            </Salutation>
            <Occupation>
                Front-end Developer
            </Occupation>
        </Container>
    )
}