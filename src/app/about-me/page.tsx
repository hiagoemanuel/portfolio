import { DotGrid } from '@/components/DotGrid'
import { Title } from '@/components/Title'
import Image from 'next/image'

export default function AboutMePage() {
  return (
    <main className="full-viewport relative">
      <Title title="sobre mim" japTitle="私について" />
      <div className="flex flex-col lg:flex-row gap-3 xs:gap-8 xl:gap-14 items-center lg:items-start">
        {/* about_me */}
        <p className=" text-sm sm:text-2xl xs:px-3 lg:px-0 font-normal text-center lg:text-left">
          {'doc.description'}
        </p>
        <Image
          className="w-50 h-50 xs:w-76 xs:h-76 xl:w-100 xl:h-100 rounded-lg outline border-4 border-dark dark:border-light"
          src={'/'}
          alt="about me picture"
          width={400}
          height={400}
        />
      </div>
      <DotGrid
        className="lg:hidden"
        position={['bottom', 'right']}
        rows={[
          ['1', '1', '1'],
          ['1', '1', '1'],
          ['1', '1', '1'],
        ]}
      />
      <DotGrid
        className="hidden lg:flex"
        position={['bottom', 'left']}
        rows={[
          ['1', '1', '1'],
          ['1', '1', '1'],
          ['1', '1', '1'],
        ]}
      />
    </main>
  )
}
