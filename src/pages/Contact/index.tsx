import { ReactSVG } from "react-svg"

import { contact } from "../../constants/contact/contact"

import { ReactComponent as CatSVG } from '../../svgs/illustrations/cat-illustration.svg'
import { Container, MainTitle } from "../../styles/global-components"

import { ContactInformation, Footer, MainContent, PersonalContact } from "./style"
import { Responsive } from "./responsive"

export const Contact = () => {
    return (
        <Container>
            <Responsive />
            <MainTitle>Contato</MainTitle>
            <MainContent>
                <CatSVG className="cat-illu" />
                <PersonalContact>
                    {
                        contact.map((info, index) => {
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