import { MainTitle } from "../../styles/global-components"
import { Container, MainContent, PersonalContact, ContactInformation, Footer } from "./style"
import { CatIllustration } from '../../constants/vectors'
import { contactData } from "../../constants/contact"
import { Responsive } from "./responsive"

export const Contact = () => {
    return (
        <Container>
            <Responsive />
            <MainTitle>Contato</MainTitle>
            <MainContent>
                <CatIllustration propClass='cat-illustration' />
                <PersonalContact>
                    {
                        contactData.map((info, index) => (
                            <ContactInformation href={info.referenceLink} target="_blank" key={index}>
                                {info.icon}
                                <h3>{info.extension}</h3>
                            </ContactInformation>
                        ))
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