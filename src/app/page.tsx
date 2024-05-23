import { AboutMe } from '@/components/sections/AboutMe'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Technologies } from '@/components/sections/Technologies'

export default function LandingPage() {
  return (
    <main className="mx-auto max-w-[1400px]">
      <Hero />
      <AboutMe />
      <Projects />
      <Technologies />
      <Contact />
    </main>
  )
}
