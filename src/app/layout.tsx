import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import MenuCollapse from '@/components/MenuCollapse'
import { Header } from '@/components/Header'
import { ThemeProvider } from '@/contexts/ThemeContext'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['200', '400', '500', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Hiago Emanuel | Portfolio',
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
