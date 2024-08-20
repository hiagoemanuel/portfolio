import prisma from '@/services/prisma'
import Link from 'next/link'

export const ContactNetworks = async () => {
  const data = {
    contact: await prisma.reference_link.findMany({
      where: { contact: { id: { not: undefined } } },
    }),
    email: await prisma.contact_email.findFirst().then((d) => d?.email),
  }

  return (
    <div className="flex flex-col lg:items-start lg:self-start gap-3 sm:gap-6 items-center">
      <div>
        <h4 className="mb-2 sm:mb-4 text-xl sm:text-4xl font-bold text-center lg:text-start">
          minhas redes
        </h4>
        <div className="flex gap-1 justify-center lg:justify-normal sm:gap-3">
          {data.contact.map((n, i) => (
            <Link className="flex items-end gap-1" href={n.url} target="_blank" key={i}>
              <div
                className="w-10 sm:w-18 h-10 sm:h-18 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-main"
                dangerouslySetInnerHTML={{ __html: n.icon }}
              />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h4 className="mb-2 sm:mb-4 text-xl sm:text-4xl font-bold text-center lg:text-start">
          e-mail de contato
        </h4>
        <p className="text-sm sm:text-3xl font-medium text-center lg:text-start">{data.email}</p>
      </div>
    </div>
  )
}
