'use client'

import { type SubmitHandler, useForm } from 'react-hook-form'
import { sendEmailJs } from '@/services/emailjs/config'
import { useState } from 'react'

interface IFormInput {
  name: string
  email: string
  subject: string
  message: string
}

export const ContactForm = () => {
  const { handleSubmit, register, reset } = useForm<IFormInput>()
  const [message, setMessage] = useState<string>()
  const [sending, setSending] = useState<boolean>(false)

  const sendEmail: SubmitHandler<IFormInput> = async (data) => {
    setSending(true)
    try {
      for (const input in data) {
        const dataIndex = data[input as keyof IFormInput]
        if (dataIndex.trim() === '' && input !== 'subject') {
          setMessage('por favor, preencha todos os campos com *')
          return
        }
      }
      await sendEmailJs({ user: 'Hiago', ...data })
      setMessage('email enviado com sucesso!')
      reset()
    } catch {
      setMessage('estamos com problemas para enviar seu email')
    } finally {
      setSending(false)
    }
  }

  return (
    <form
      className="w-full max-w-96 flex flex-col gap-2 sm:gap-3 px-2"
      autoComplete="off"
      onSubmit={handleSubmit(sendEmail)}
    >
      <input className="input-form" placeholder="nome *" type="text" {...register('name')} />
      <input className="input-form" placeholder="email *" type="email" {...register('email')} />
      <input className="input-form" placeholder="assunto" type="text" {...register('subject')} />
      <textarea
        className="input-form h-26 lg:h-48"
        placeholder="mensagem *"
        {...register('message')}
      />
      <div>
        <input
          className={`${sending ? 'bg-main/50' : ''} w-full input-form cursor-pointer text-xl font-bold`}
          disabled={sending}
          type="submit"
          value="enviar email"
        />
        <p className="text-center text-main text-sm sm:text-base">
          {message ?? <span className="invisible">content</span>}
        </p>
      </div>
    </form>
  )
}
