import '../styles/globals.css'
import '../styles/reset.css'
import SpriteSheet from './_components/icon/SpriteSheet'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {SpriteSheet}
        <main>{children}</main>
      </body>
    </html>
  )
}
