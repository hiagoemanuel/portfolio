import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

import { ProjectType, projects } from "../../../constants/projects/projects";

import { Container, MainTitle } from "../../../styles/global-components";

import { ReactComponent as ChanICON } from '../../../svgs/icons/link-icon/chain-icon.svg';
import { ReactComponent as GitHubICON } from '../../../svgs/icons/link-icon/github-icon.svg';

import { Content, Informations, LinkButton, Links, ProjectAbout, ProjectDemo, ProjectTechs } from "./style";



export const ProjectDetails = () => {
    const routeUrl = useParams().id
    const [projectData, setProjectData] = useState<ProjectType>()

    useEffect(() => {
        const projectResponse: ProjectType = projects.filter(p => p.links.projectPath === routeUrl)[0]
        setProjectData(projectResponse)
    }, [routeUrl])

    return projectData ? (
        <Container>
            <MainTitle>Projetos</MainTitle>
            <Content>
                <Link to="/projects" className="return-btn" >{'<'}</Link>
                <ProjectDemo src={projectData.images.main} alt={projectData.name} />
                <ProjectAbout>
                    <Informations>
                        <h2>{projectData.name}</h2>
                        <p>{projectData.discription}</p>
                    </Informations>
                    <ProjectTechs>
                        {
                            projectData.techs.map(tech => (
                                <ReactSVG src={tech} key={tech} />
                            ))
                        }
                    </ProjectTechs>
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