import Link from 'next/link'
import { getDocument } from '@/services/firebase/getDocument'
import { type ContatctDoc } from '@/services/firebase/documents'

export const ContactNetworks = async () => {
  const docRef = await getDocument<ContatctDoc>('core-info', 'contact')

  return (
    <div className="flex flex-col lg:items-start lg:self-start gap-3 sm:gap-6 items-center">
      <div>
        <h4 className="mb-2 sm:mb-4 text-xl sm:text-4xl font-bold text-center lg:text-start">
          minhas redes
        </h4>
        <div className="flex flex-col gap-1 sm:gap-3">
          {docRef?.networks.map((n, i) => (
            <Link className="flex items-end gap-1" href={n.href} target="_blank" key={i}>
              <div
                className="w-10 sm:w-18 h-10 sm:h-18 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-main"
                dangerouslySetInnerHTML={{ __html: n.icon }}
              />
              <p className="text-sm sm:text-3xl font-medium">{n.slug}</p>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h4 className="mb-2 sm:mb-4 text-xl sm:text-4xl font-bold text-center lg:text-start">
          e-mail de contato
        </h4>
        <p className="text-sm sm:text-3xl font-medium text-center lg:text-start">{docRef?.email}</p>
      </div>
    </div>
  )
}
