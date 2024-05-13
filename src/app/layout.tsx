import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import MenuCollapse from '@/components/MenuCollapse'
import { Header } from '@/components/Header'

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
      <body className={`${notoSans.className} bg-light dark:bg-dark relative`}>
        <Header />
        <MenuCollapse />
        {children}
      </body>
    </html>
  )
}