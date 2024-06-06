'use client'

import { type SubmitHandler, useForm } from 'react-hook-form'
import { sendEmailJs } from '@/services/emailjs/config'

interface IFormInput {
  name: string
  email: string
  subject: string
  message: string
}

export const ContactForm = () => {
  const { handleSubmit, register } = useForm<IFormInput>()

  const sendEmail: SubmitHandler<IFormInput> = async (data) => {
    const templateParams = {
      user: 'Hiago',
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    }
    await sendEmailJs(templateParams)
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
      <input
        className="input-form cursor-pointer text-xl font-bold"
        type="submit"
        value="enviar email"
      />
    </form>
  )
}
