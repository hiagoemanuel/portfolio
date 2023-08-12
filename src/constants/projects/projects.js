import projectsImages from "./projects-images"

export const projects = [
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