import '../styles/globals.css'
import '../styles/reset.css'
import QueryProvider from './_components/QueryProvider'
import SpriteSheet from '@/app/_components/icon/SpriteSheet'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {SpriteSheet}
        <div>
          <QueryProvider>{children}</QueryProvider>
        </div>
      </body>
    </html>
  )
}
