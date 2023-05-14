import { ReactSVG } from "react-svg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Container, MainTitle } from "../../../styles/global-components";

import { Content, Informations, LinkButton, Links, ProjectAbout, ProjectDemo } from "./style";
import { Responsive } from "./responsive";

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
        projectData ?
            <Container>
                <Responsive />
                <MainTitle>Projetos</MainTitle>
                <Content>
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
                </Content>
            </Container> : ''
    )
}