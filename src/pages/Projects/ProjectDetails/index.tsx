import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { ProjectType, projects } from "../../../constants/projects/projects";

import { Container, MainTitle } from "../../../styles/global-components";

import { ReactComponent as ChanICON } from '../../../svgs/icons/link-icon/chain-icon.svg';
import { ReactComponent as GitHubICON } from '../../../svgs/icons/link-icon/github-icon.svg';

import { Content, Informations, LinkButton, Links, ProjectAbout, ProjectDemo } from "./style";
import { Responsive } from "./responsive";

export const ProjectDetails = () => {
    const routeUrl = useParams().id
    const [projectData, setProjectData] = useState<ProjectType>()

    useEffect(() => {
        const projectResponse: ProjectType = projects.filter(p => p.links.projectPath === routeUrl)[0]
        setProjectData(projectResponse)
    }, [routeUrl])

    return projectData ? (
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
                            <ChanICON />
                            Acessar Site
                        </LinkButton>
                        <LinkButton href={projectData.links.githubRepository} target="_blanck">
                            <GitHubICON />
                            Repositório
                        </LinkButton>
                    </Links>
                </ProjectAbout>
            </Content>
        </Container>
    ) : (
        <Container>
            <h1>Desculpe nada foi encontrado {':('}</h1>
        </Container>
    )
}