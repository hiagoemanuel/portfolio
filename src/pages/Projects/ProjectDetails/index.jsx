import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { MainTitle } from "../../../styles/global-components";
import { projects } from "../../../constants/projects";
import { GitHubIcon, ChainIcon } from '../../../constants/icons'
import { Container, ProjectDemo, ProjectAbout, Informations, Links, LinkButton } from "./style";
import { Responsive } from "./responsive";

export const ProjectDetails = () => {
    const routeUrl = useParams().id
    const project = projects.filter(p => p.links.projectPath === routeUrl)[0]

    return (
        <>
            <Responsive />
            <MainTitle>Projetos</MainTitle>
            <Container>
                <Link to="/projects" className="return-btn" >{'<'}</Link>
                <ProjectDemo src={project.images.main} alt={project.name} />
                <ProjectAbout>
                    <Informations>
                        <h2>{project.name}</h2>
                        <p>{project.discription}</p>
                    </Informations>
                    <Links>
                        <LinkButton href={project.links.webSiteAccess} target="_blanck">
                            <ChainIcon />
                            Acessar Site
                        </LinkButton>
                        <LinkButton href={project.links.githubRepository} target="_blanck">
                        <GitHubIcon />
                            Repositório
                        </LinkButton>
                    </Links>
                </ProjectAbout>
            </Container>
        </>
    )
}