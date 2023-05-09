import { MainTitle } from '../../styles/global-components'
import { Container, ContentContainer, IconContainer, Skill, SkillName, SkillIntroduction } from './style'
import { SkillsIcon } from '../../constants/skills-icon'
import { OwlIllustration } from '../../constants/vectors'
import { Responsive } from './responsive'

export const Skills = () => {
    return (
        <Container>
            <Responsive />
            <MainTitle>Habilidades</MainTitle>
            <ContentContainer>
                <IconContainer>
                    {
                        SkillsIcon.map((icon, index) => (<Skill key={index}>{icon()}</Skill>))
                    }
                </IconContainer>
                <div>
                    <SkillName>HTML5<span>(hyper text markup language)</span></SkillName>
                    <SkillIntroduction>
                        HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo.
                    </SkillIntroduction>
                </div>
                <OwlIllustration propClass='illustration' />
            </ContentContainer>
        </Container>
    )
}