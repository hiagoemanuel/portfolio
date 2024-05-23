'use client'

import { useEffect, useState } from 'react'
import { Github } from './svgs/Github'
import Link from 'next/link'
import { Linkedin } from './svgs/Linkedin'

export const ContactNetworks = () => {
  const [email, setEmail] = useState<string>('')

  useEffect(() => {
    setEmail('contact@email.com')
  }, [])

  return (
    <div className="flex flex-col lg:items-start lg:self-start gap-3 sm:gap-6 items-center">
      <div>
        <h4 className="mb-2 sm:mb-4 text-xl sm:text-4xl font-bold text-center lg:text-start">
          minhas redes
        </h4>
        <div className="flex flex-col gap-1 sm:gap-3">
          <Link className="flex items-end gap-1" href="/">
            <div className="w-10 sm:w-18 h-10 sm:h-18 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-main">
              <Github />
            </div>
            <p className="text-sm sm:text-3xl font-medium">/networkslug</p>
          </Link>
          <Link className="flex items-end gap-1" href="/">
            <div className="w-10 sm:w-18 h-10 sm:h-18 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-main">
              <Linkedin />
            </div>
            <p className="text-sm sm:text-3xl font-medium">/networkslug2</p>
          </Link>
        </div>
      </div>
      <div>
        <h4 className="mb-2 sm:mb-4 text-xl sm:text-4xl font-bold text-center lg:text-start">
          e-mail de contato
        </h4>
        <p className="text-sm sm:text-3xl font-medium text-center lg:text-start">{email}</p>
      </div>
    </div>
  )
}
