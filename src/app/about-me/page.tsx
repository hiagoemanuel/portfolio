import { DotGrid } from '@/components/DotGrid'
import { Title } from '@/components/Title'
import { type AboutMeDoc } from '@/services/firebase/documents'
import { getDocument } from '@/services/firebase/getDocument'
import { getImage } from '@/services/firebase/getImage'
import Image from 'next/image'

export default async function AboutMePage() {
  const doc = await getDocument<AboutMeDoc>('single-page', 'about-me')
  const image = await getImage(doc.image)

  return (
    <main className="full-viewport relative">
      <Title title="sobre mim" japTitle="私について" />
      <div className="flex flex-col lg:flex-row gap-3 xs:gap-8 xl:gap-14 items-center lg:items-start">
        <p className=" text-sm sm:text-2xl xs:px-3 lg:px-0 font-normal text-center lg:text-left">
          {doc.description}
        </p>
        <Image
          className="w-50 h-50 xs:w-76 xs:h-76 xl:w-100 xl:h-100 rounded-lg outline border-4 border-dark dark:border-light"
          src={image}
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
