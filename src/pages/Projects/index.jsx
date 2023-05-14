import { MainTitle } from '../../styles/global-components'
import { Link } from 'react-router-dom'
import { GridProjects } from './style'
import { Responsive } from './responsive'
import { useEffect } from 'react'
import { useState } from 'react'

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
        <>
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
        </>
    )
}