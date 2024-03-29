import { aboutMe } from "../../constants/about-me"

import { Container, MainTitle } from "../../styles/global-components"

import ProfileIMG from '/assets/profile-photo.jpg';
import { ReactComponent as FoxILLU } from '../../svgs/illustrations/fox-illustration.svg'

import { Discription, MainContent, ProfilePhoto } from "./style"

export const AboutMe = () => {
    return (
        <Container>
            <MainTitle>Sobre Mim</MainTitle>
            <MainContent>
                <ProfilePhoto src={ProfileIMG} alt="profile_photo" />
                <Discription>
                    <p>{aboutMe.paragraphOne}</p>
                    <p>{aboutMe.paragraphTwo}</p>
                    <FoxILLU />
                </Discription>
            </MainContent>
        </Container>
    )
}