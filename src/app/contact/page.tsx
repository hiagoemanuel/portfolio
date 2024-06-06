import { ContactForm } from '@/components/ContactForm'
import { ContactNetworks } from '@/components/ContactNetworks'
import { DotGrid } from '@/components/DotGrid'
import { Title } from '@/components/Title'

export default function ContactPage() {
  return (
    <main className="full-viewport relative">
      <Title title="contato" japTitle="接触" />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-20">
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
    </main>
  )
}
