import '../styles/globals.css'
import '../styles/reset.css'
import QueryProvider from './_components/QueryProvider'
import SpriteSheet from '@/app/_components/icon/SpriteSheet'
import { LayoutProps } from '@/types/common'

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {SpriteSheet}
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
