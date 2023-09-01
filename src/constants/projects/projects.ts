import projectsImages from "./projects-images"

interface Project {
    name: string;
    discription: string;
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

export const projects: Project[] = [
    {
        name: 'Pokémon API',
        discription: 'Um site SPA que exibe cards de Pokémon. Com 12 temas e um filtro, você pode personalizar sua busca pelos cards desejados. Os dados são obtidos de uma API, exibindo imagens, nomes, tipos, habilidades e movimentos.',
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