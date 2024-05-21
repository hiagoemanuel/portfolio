import { AboutMe } from '@/components/sections/AboutMe'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'

export default function LandingPage() {
  return (
    <main className="mx-auto max-w-[1400px]">
      <Hero />
      <AboutMe />
      <Projects />
    </main>
  )
}
