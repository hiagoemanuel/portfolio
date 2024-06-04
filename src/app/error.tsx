'use client'

import { useState } from 'react'

export default function Error({ error }: { error: Error & { digest?: string } }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  console.log(error)
  return (
    <main className="full-viewport flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-main">500</h1>
      <p className="text-xl font-bold text-main">Estamos com problemas</p>
      <p className="text-xl font-bold text-main">（︶⁔︶）</p>
      <button
        className="text-xl mt-3 p-3 rounded-xl font-medium bg-main text-light dark:text-dark"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        o que houve?
      </button>
      <section
        className={`${isOpen ? 'flex' : 'hidden'} justify-center items-center absolute top-0 left-0 w-full h-svh bg-light/50 dark:bg-dark/50`}
      >
        <div className="max-w-[37.5rem] bg-main rounded-xl p-3 mx-3 flex flex-col items-center">
          <p className="bg-dark rounded-xl p-3">{error.message}</p>
          <button
            className="text-xl mt-3 p-3 rounded-xl font-medium bg-light dark:bg-dark"
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            fechar
          </button>
        </div>
      </section>
    </main>
  )
}
