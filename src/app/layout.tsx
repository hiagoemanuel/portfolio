import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import MenuCollapse from '@/components/MenuCollapse'
import { Header } from '@/components/Header'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { cookies } from 'next/headers'

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
    <html lang="pt-BR">
      <body
        className={`${notoSans.className} bg-light dark:bg-dark text-dark dark:text-light relative overflow-x-hidden`}
      >
        <ThemeProvider>
          <Header />
          <MenuCollapse />
        </ThemeProvider>
        {children}
      </body>
    </html>
  )
}
