import { FoxIllustration } from "../../constants/vectors"
import { MainTitle } from "../../styles/global-components"
import { Container, MainContent, Discription, ProfilePhoto } from "./style"
import profile_photo from '../../images/profile-photo.jpg'
import { Responsive } from "./responsive"

export const AboutMe = () => (
    <Container>
        <Responsive />
        <MainTitle>Sobre Mim</MainTitle>
        <MainContent>
            <ProfilePhoto src={profile_photo} alt="profile_photo" />
            <Discription>
                <p>Desde criança, sempre tive um grande interesse na área de T.I. Sempre fui fascinado pelo poder que os computadores têm em mudar a vida das pessoas, especialmente a minha.</p>
                <p>Em janeiro de 2022, comecei a estudar programação por pura curiosidade. Gostei tanto dessa complexidade que hoje em dia estou buscando meu espaço na área de desenvolvimento web, mais especificamente como front-end developer.</p>
                <FoxIllustration />
            </Discription>
        </MainContent>
    </Container>
)