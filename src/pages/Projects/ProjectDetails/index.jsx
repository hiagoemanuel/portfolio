import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { MainTitle } from "../../../styles/global-components";
import { Container, ProjectDemo, ProjectAbout, Informations, Links, LinkButton } from "./style";
import { Responsive } from "./responsive";
import { useEffect } from "react";
import { useState } from "react";
import { ReactSVG } from "react-svg";

export const ProjectDetails = () => {
    const routeUrl = useParams().id
    const [projectData, setProjectData] = useState()

    useEffect(() => {
        const data = async () => {
            const response = await fetch('/data/projects.json')
            const json = await response.json()
            setProjectData(json.filter(p => p.links.projectPath === routeUrl)[0])
        }
        data()
    }, [routeUrl])

    return (
        projectData ? <>
            <Responsive />
            <MainTitle>Projetos</MainTitle>
            <Container>
                <Link to="/projects" className="return-btn" >{'<'}</Link>
                <ProjectDemo src={projectData.images.main} alt={projectData.name} />
                <ProjectAbout>
                    <Informations>
                        <h2>{projectData.name}</h2>
                        <p>{projectData.discription}</p>
                    </Informations>
                    <Links>
                        <LinkButton href={projectData.links.webSiteAccess} target="_blanck">
                            <ReactSVG src='/images/icons/link-icon/chain-icon.svg' />
                            Acessar Site
                        </LinkButton>
                        <LinkButton href={projectData.links.githubRepository} target="_blanck">
                            <ReactSVG src='/images/icons/link-icon/github-icon.svg' />
                            Repositório
                        </LinkButton>
                    </Links>
                </ProjectAbout>
            </Container>
        </> : ''
    )
}