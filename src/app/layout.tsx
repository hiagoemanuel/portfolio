import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { cookies } from 'next/headers'
import { Footer } from '@/components/sections/Footer'
import { OnTopButton } from '@/components/OnTopButton'
import { AnimatePresenceWrapper } from '@/services/framer-motion/AnimatePresenceWrapper'
import MobileHeader from '@/components/MobileHeader'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['200', '400', '500', '700', '800', '900'],
})

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme.he-portfolio')?.value as 'dark' | 'light'

  const firstLoad = [
    { url: '/favicon-dark.svg', media: '(prefers-color-scheme: dark)' },
    { url: '/favicon-light.svg', media: '(prefers-color-scheme: light)' },
  ]

  return {
    title: 'Hiago Emanuel | Portfolio',
    icons: theme
      ? [{ url: theme === 'light' ? '/favicon-light.svg' : '/favicon-dark.svg' }]
      : firstLoad,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${notoSans.className} mb-14 sm:mb-0 bg-light dark:bg-dark text-dark dark:text-light relative`}
      >
        <ThemeProvider>
          <Header />
          <MobileHeader />
        </ThemeProvider>
        <AnimatePresenceWrapper>{children}</AnimatePresenceWrapper>
        <OnTopButton />
        <Footer />
        <span className="bg-[#c9c3b4] dark:bg-[#111111]" />
      </body>
    </html>
  )
}
