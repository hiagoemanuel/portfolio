import { FavIcon } from '@/components/FavIcon'
import { cookies } from 'next/headers'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme.he-portfolio')?.value as 'dark' | 'light'

  return new ImageResponse(<FavIcon theme={theme ?? 'light'} />, { ...size })
}
