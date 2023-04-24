import { FoxIllustration } from "../../constants/vectors"
import { MainTitle } from "../../styles/global-components"
import { Container, MainContent, Discription, ProfilePhoto } from "./style"
import profile_photo from '../../images/profile-photo.jpg'

export const AboutMe = () => (
    <Container>
        <MainTitle>Sobre Mim</MainTitle>
        <MainContent>
            <ProfilePhoto src={profile_photo} alt="profile_photo" />
            <Discription>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <FoxIllustration />
            </Discription>
        </MainContent>
    </Container>
)