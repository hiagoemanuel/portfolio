import { technologies } from '../../constants/technologies'
import { MainTitle } from '../../styles/global-components'
import { Container, ContentContainer, IconContainer, Skill, SkillName, SkillIntroduction } from './style'
import { OwlIllustration } from '../../constants/vectors'
import { Responsive } from './responsive'
import { useState } from 'react'

export const Skills = () => {
    const [currentTech, setCurrentTech] = useState(technologies[0])

    return (
        <Container>
            <Responsive />
            <MainTitle>Habilidades</MainTitle>
            <ContentContainer>
                <IconContainer>
                    {
                        technologies.map((tech, index) => (
                            <Skill
                                onClick={() => setCurrentTech(tech)}
                                selected={currentTech.name === tech.name}
                                key={index}
                            >
                                {tech.icon}
                            </Skill>
                        ))
                    }
                </IconContainer>
                <div>
                    <SkillName>
                        {currentTech.name}
                        {currentTech.parentheses ? <span>{currentTech.parentheses}</span> : ''}
                    </SkillName>
                    <SkillIntroduction>{currentTech.description}</SkillIntroduction>
                </div>
                <OwlIllustration propClass='illustration' />
            </ContentContainer>
        </Container>
    )
}