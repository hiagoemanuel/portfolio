// name: string
// parentheses?: string
// icon: React.JSX.Element
// description: string

import { Bootstrap, Css, Git, GitHub, Html, JavaScript, ReactApp, StyledComponents } from "./skills-icon";

export const technologies = [
    {
        name: 'React',
        icon: <ReactApp />,
        description: 'Uma biblioteca JavaScript para construção de interfaces de usuário (UI). Criado em 2011 pelo time do Facebook, o React surgiu com o objetivo de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social.'
    },
    {
        name: 'Styled Components',
        icon: <StyledComponents />,
        description: 'É uma biblioteca que permite escrever código CSS dentro do JavaScript (CSS-in-JS) para estilizar componentes React. Foi criado por Max Stoiber, Glen Maddern e outros colaboradores, e lançado em 2016. Uma das principais vantagens dessa biblioteca é o encapsulamento de estilos, o que evita conflitos de classes e torna mais fácil a manutenção e reutilização dos componentes estilizados.'
    },
    {
        name: 'JavaScript',
        icon: <JavaScript />,
        description: 'É uma linguagem de programação que permite a você implementar itens complexos em páginas web. Foi criado em 1995 por Brendan Eich a serviço da Netscape. Seu objetivo era atender à demanda crescente por sites mais interativos e dinâmicos, já que, até então, as páginas HTML continham pouca ou nenhuma interatividade além dos hyperlinks.'
    },
    {
        name: 'Bootstrap',
        icon: <Bootstrap />,
        description: 'É um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações de forma rápida e simples. Desenvolvido por Mark Otto e Jacó Thornton em 2011 para o Twitter. Seu objetivo era otimizar o desenvolvimento através de uma estrutura única, reduzindo inconsistências entre as diversas formas de codificar, que variavam de cada profissional.'
    },
    {
        name: 'CSS3',
        parentheses: '(cascading style sheets)',
        icon: <Css />,
        description: 'É usado para estilizar elementos escritos em uma linguagem de marcação. Em 1995, foi aprensentado por Håkon Wium Lie e Bert Bos a proposta do CSS, que foi apoiada pela W3C (World Wide Web Consortium). Seu objetivo era de facilitar a programação de sites, que na época era muito complexa.'
    },
    {
        name: 'HTML5',
        parentheses: '(hyper text markup language)',
        icon: <Html />,
        description: 'É usado para estilizar elementos escritos em uma linguagem de marcação. Em 1995, foi aprensentado por Håkon Wium Lie e Bert Bos a proposta do CSS, que foi apoiada pela W3C (World Wide Web Consortium). Seu objetivo era de facilitar a programação de sites, que na época era muito complexa.'
    },
    {
        name: 'Git',
        icon: <Git />,
        description: 'É um sistema de controle de versão de códigos-fonte. Desenvolvido em 2005 por Linus Torvalds, criador do Linux. Linus desenvolveu o Git após ter ficado insatisfeito com uma mudança de licença de utilização do BitKeeper, o sistema de controle de versão que era utilizado por ele e pela equipe que desenvolvia o Linux.'
    },
    {
        name: 'GitHub',
        icon: <GitHub />,
        description: 'É uma plataforma de hospedagem de códigos e arquivos com controle de versão usando o Git. Foi desenvolvido por Chris Wanstrath, J. Hyett, Tom Preston-Werner e Scott Chacon no de 2008. O GitHub nasceu com o principal objetivo de abrigar projetos que são versionados via Git.'
    }
]