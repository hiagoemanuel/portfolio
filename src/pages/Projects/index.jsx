import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, MainTitle } from '../../styles/global-components'

import { GridProjects } from './style'
import { Responsive } from './responsive'

export const Projects = () => {
    const [projectsData, setProjectsData] = useState([])

    useEffect(() => {
        const data = async () => {
            const response = await fetch('data/projects.json')
            const json = await response.json()
            setProjectsData(json)
        }
        data()
    }, [])

    return (
        <Container>
            <Responsive />
            <MainTitle>Projetos</MainTitle>
            <GridProjects>
                {
                    projectsData.map((project, index) => (
                        <Link to={project.links.projectPath} key={index}>
                            <img src={project.images.grid} alt={project.name} />
                            <span>
                                <h3>{project.name}</h3>
                            </span>
                        </Link>
                    ))
                }
            </GridProjects>
        </Container>
    )
}