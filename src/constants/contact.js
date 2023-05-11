import { GitHubContact, Linkedin, Whatsapp } from "./contact-icons";

// icon: React.JSX.Element
// extension: string  
// referenceLink: string

export const contactData = [
    {
        icon: <GitHubContact />,
        extension: '/hiagoemanuel',
        referenceLink: 'https://github.com/hiagoemanuel'
    },
    {
        icon: <Linkedin />,
        extension: '/hiagoemanuel',
        referenceLink: 'https://www.linkedin.com/in/hiago-emanuel-603610246/'
    },
    {
        icon: <Whatsapp />,
        extension: '+55 (45) 98810-9220',
        referenceLink: 'https://api.whatsapp.com/send?phone=5545988109220'
    }
]