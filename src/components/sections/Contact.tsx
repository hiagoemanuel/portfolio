import { ContactNetworks } from '../ContactNetworks'
import { Container } from '../Container'
import { DotGrid } from '../DotGrid'
import { Title } from '../Title'

export const Contact = () => {
  return (
    <Container>
      <Title title="contato" japTitle="接触" />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-10">
        <form
          className="w-full max-w-96 flex flex-col gap-2 sm:gap-3 px-2"
          action="/"
          method="post"
          autoComplete="off"
        >
          <input className="input-form" placeholder="nome *" type="text" name="name" />
          <input className="input-form" placeholder="email *" type="email" name="email" />
          <input className="input-form" placeholder="assunto" type="text" name="subject" />
          <textarea className="input-form h-26 lg:h-48" placeholder="mensagem *" name="message" />
          <input
            className="input-form cursor-pointer text-xl font-bold"
            type="submit"
            value="enviar email"
          />
        </form>
        <ContactNetworks />
      </div>
      <DotGrid
        position={['top', 'right']}
        rows={[
          ['1', '1', '0'],
          ['0', '1', '1'],
          ['0', '0', '1'],
        ]}
      />
      <DotGrid
        position={['bottom', 'right']}
        rows={[
          ['0', '0', '1'],
          ['0', '1', '1'],
          ['1', '1', '0'],
        ]}
      />
    </Container>
  )
}
