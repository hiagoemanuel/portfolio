import { ContactForm } from '../ContactForm'
import { ContactNetworks } from '../ContactNetworks'
import { Container } from '../Container'
import { DotGrid } from '../DotGrid'
import { Title } from '../Title'

export const Contact = () => {
  return (
    <Container>
      <Title title="contato" japTitle="接触" />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-10">
        <ContactForm />
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
