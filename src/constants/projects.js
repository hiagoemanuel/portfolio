// name: string
// discription: string
// links: {
//     projectPath: string
//     githubRepository: string
//     webSiteAccess: string
// }
// images: {
//     grid: require(path: main-photo.jpg)
//     main: require(path: details-photo.jpg)
//     
//     ###
//      grid = 314x147
//      main = 400x400
//     ###
// }

export const projects = [
    {
        name: 'Pokémon API',
        discription: 'Um site SPA que exibe cards de Pokémon. Com 12 temas e um filtro, você pode personalizar sua busca pelos cards desejados. Os dados são obtidos de uma API, exibindo imagens, nomes, tipos, habilidades e movimentos.',
        links: {
            projectPath: 'projeto-1',
            githubRepository: 'https://github.com/hiagoemanuel/pokemon-api',
            webSiteAccess: 'https://pokemon-api-zeta-ten.vercel.app/'
        },
        images: {
            grid: require('../images/projects-pictures/pokemon-api/main-photo.jpg'),
            main: require('../images/projects-pictures/pokemon-api/details-photo.jpg')
        },
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
            grid: require('../images/projects-pictures/comming-soon.jpg'),
            main: ''
        },
    }
]