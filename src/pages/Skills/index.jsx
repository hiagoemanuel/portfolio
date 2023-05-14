import { ReactSVG } from 'react-svg'
import { useEffect, useState } from 'react'

import { Container, MainTitle } from '../../styles/global-components'

import { ContentContainer, IconContainer, Skill, SkillIntroduction, SkillName } from './style'
import { Responsive } from './responsive'

export const Skills = () => {
    const [technologies, setTechnologies] = useState([])
    const [currentTech, setCurrentTech] = useState([])

    useEffect(() => {
        const data = async () => {
            const response = await fetch('data/skills.json')
            const json = await response.json()
            setTechnologies(json)
            setCurrentTech(json[0])
        }
        data()
    }, [])

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
                                <ReactSVG src={tech.icon} />
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
                <ReactSVG id='olw-illustration' src='/images/illustrations/owl-illustration.svg'/>
            </ContentContainer>
        </Container>
    )
}