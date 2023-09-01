import { contacImages } from "./contact-images"

type ContactType = {
    icon: string;
    extension: string;
    referenceLink: string
}

export const contact: ContactType[] = [
    {
        icon: contacImages.github,
        extension: '/hiagoemanuel',
        referenceLink: 'https://github.com/hiagoemanuel'
    },
    {
        icon: contacImages.linkedin,
        extension: '/hiagoemanuel',
        referenceLink: 'https://www.linkedin.com/in/hiago-emanuel-603610246/'
    },
    {
        icon: contacImages.whatsapp,
        extension: '+55 (45) 98810-9220',
        referenceLink: 'https://api.whatsapp.com/send?phone=5545988109220'
    }
]