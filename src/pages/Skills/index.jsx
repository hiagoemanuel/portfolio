import { ReactSVG } from 'react-svg'
import { useState } from 'react'

import { skills } from '../../constants/skills/skills'

import { Container, MainTitle } from '../../styles/global-components'
import { ReactComponent as OwlILLU } from '../../assets/illustrations/owl-illustration.svg'

import { ContentContainer, IconContainer, Skill, SkillIntroduction, SkillName } from './style'
import { Responsive } from './responsive'

export const Skills = () => {
    const [currentTech, setCurrentTech] = useState(skills[0])

    return (
        <Container>
            <Responsive />
            <MainTitle>Habilidades</MainTitle>
            <ContentContainer>
                <IconContainer>
                    {
                        skills.map((tech, index) => (
                            <Skill
                                onClick={() => setCurrentTech(tech)}
                                $selected={currentTech.name === tech.name}
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
                <OwlILLU className='owl-illu' />
            </ContentContainer>
        </Container>
    )
}