import { Link } from 'react-router-dom'

import { projects } from '../../constants/projects/projects'

import { Container, MainTitle } from '../../styles/global-components'

import { GridProjects } from './style'

export const Projects = () => {
    return (
        <Container>
            <MainTitle>Projetos</MainTitle>
            <GridProjects>
                {
                    projects.map((project, index) => (
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