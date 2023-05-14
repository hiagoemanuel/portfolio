import { MainTitle } from "../../styles/global-components"
import { Container, MainContent, Discription, ProfilePhoto } from "./style"
import { Responsive } from "./responsive"
import { ReactSVG } from "react-svg"
import { useEffect } from "react"
import { useState } from "react"

export const AboutMe = () => {
    const [aboutMeData, setAboutMeData] = useState({})

    useEffect(() => {
        const data = async () => {
            const response = await fetch('data/about-me.json')
            const json = await response.json()
            setAboutMeData(json)
        }
        data()
    }, [])

    return (
        <Container>
            <Responsive />
            <MainTitle>Sobre Mim</MainTitle>
            <MainContent>
                <ProfilePhoto src={aboutMeData.profilePhoto} alt="profile_photo" />
                <Discription>
                    <p>{aboutMeData.paragraphOne}</p>
                    <p>{aboutMeData.paragraphTwo}</p>
                    <ReactSVG src='/images/illustrations/fox-illustration.svg' />
                </Discription>
            </MainContent>
        </Container>
    )
}