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
    <div className="flex flex-col gap-3 items-center">
      <div>
        <h4 className="mb-2 text-xl font-bold">minhas redes</h4>
        <div className="flex flex-col gap-1">
          <Link className="flex items-end gap-1" href="/">
            <div className="w-10 h-10 p-2 rounded-lg bg-main">
              <Github />
            </div>
            <p className="text-sm font-medium">/networkslug</p>
          </Link>
          <Link className="flex items-end gap-1" href="/">
            <div className="w-10 h-10 p-2 rounded-lg bg-main">
              <Linkedin />
            </div>
            <p className="text-sm font-medium">/networkslug</p>
          </Link>
        </div>
      </div>
      <div>
        <h4 className="mb-2 text-xl font-bold">e-mail de contato</h4>
        <p className="text-sm font-medium text-center">{email}</p>
      </div>
    </div>
  )
}
