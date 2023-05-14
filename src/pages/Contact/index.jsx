import { MainTitle } from "../../styles/global-components"
import { Container, MainContent, PersonalContact, ContactInformation, Footer } from "./style"
import { Responsive } from "./responsive"
import { useEffect, useState } from "react"
import { ReactSVG } from "react-svg"

export const Contact = () => {
    const [contactData, setContactData] = useState([])

    useEffect(() => {
        const data = async () => {
            const response = await fetch('/data/contact.json')
            const json = await response.json()
            setContactData(json)
        }
        data()
    }, [])

    return (
        <Container>
            <Responsive />
            <MainTitle>Contato</MainTitle>
            <MainContent>
                <ReactSVG id="cat-illustration" src='images/illustrations/cat-illustration.svg' />
                <PersonalContact>
                    {
                        contactData.map((info, index) => {
                            return (
                                <ContactInformation href={info.referenceLink} target="_blank" key={index}>
                                    <ReactSVG src={info.icon} />
                                    <h3>{info.extension}</h3>
                                </ContactInformation>
                            )
                        })
                    }
                </PersonalContact>
            </MainContent>
            <Footer>
                <h5>Ilustrações: <a href='https://www.freepik.com/' target='_blank' rel="noreferrer">rawpixel.com / Freepik</a></h5>
                <h5>Desenvolvido por <a href='https://github.com/hiagoemanuel' target='_blank' rel="noreferrer">{'<'}hiago emanuel{'>'}</a></h5>
            </Footer>
        </Container>
    )
}