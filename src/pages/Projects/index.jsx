import { MainTitle } from '../../styles/global-components'
import { Link } from 'react-router-dom'
import { GridProjects } from './style'
import { projects } from '../../constants/projects'
import { Responsive } from './responsive'

export const Projects = () => {
    return (
        <>
            <Responsive />
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
        </>
    )
}