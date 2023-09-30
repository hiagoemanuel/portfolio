import projectsImages from "./projects-images"
import { skillsImages as techs } from "../skills/skills-images"; 

export interface ProjectType {
    name: string;
    discription: string;
    techs: string[],
    links: {
        projectPath: string;
        githubRepository: string;
        webSiteAccess: string
    },
    images: {
        grid: string,
        main: string
    }
}

export const projects: ProjectType[] = [
    {
        name: 'Pokémon API',
        discription: 'Um site SPA que exibe cards de Pokémon. Com 12 temas e um filtro, você pode personalizar sua busca pelos cards desejados. Os dados são obtidos de uma API, exibindo imagens, nomes, tipos, habilidades e movimentos.',
        techs: [
            techs.html,
            techs.css,
            techs.javascript,
            techs.react,
            techs.styledComponents
        ],
        links: {
            projectPath: 'pokemon-api',
            githubRepository: 'https://github.com/hiagoemanuel/pokemon-api',
            webSiteAccess: 'https://pokemon-api-zeta-ten.vercel.app/'
        },
        images: {
            grid: projectsImages.pokemonApi[0],
            main: projectsImages.pokemonApi[1]
        }
    },
    {
        name: 'Simple To-Do',
        discription: 'O Simple To-Do é uma aplicação minimalista de gerenciamento de tarefas, para ajudar os usuários a manterem suas tarefas diárias organizadas de maneira fácil e rápida. Com uma interface limpa e intuitiva.',
        techs: [
            techs.html,
            techs.css,
            techs.typescript,
            techs.react,
            techs.styledComponents
        ],
        links: {
            projectPath: 'simple-to-do',
            githubRepository: 'https://github.com/hiagoemanuel/simple-to-do',
            webSiteAccess: 'https://simple-to-doo.vercel.app/'
        },
        images: {
            grid: projectsImages.simpleToDo[0],
            main: projectsImages.simpleToDo[1]
        }
    },
    {
        name: 'Figma Land',
        discription: 'Uma landing page com o tema escuro, otima para mostrar produtos de startups.',
        techs: [
            techs.html,
            techs.sass,
            techs.javascript,
            techs.react,
        ],
        links: {
            projectPath: 'figma-land',
            githubRepository: 'https://github.com/hiagoemanuel/figma-land',
            webSiteAccess: 'https://figma-landing.vercel.app/'
        },
        images: {
            grid: projectsImages.figmaLand[0],
            main: projectsImages.figmaLand[1]
        }
    },
    {
        name: 'Em breve...',
        discription: '',
        techs: [
            techs.html,
        ],
        links: {
            projectPath: '',
            githubRepository: '',
            webSiteAccess: ''
        },
        images: {
            grid: projectsImages.emBreve[0],
            main: ''
        }
    }
]