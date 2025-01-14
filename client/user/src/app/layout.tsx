import "@tookscan/styles/globals.css"
import "@tookscan/styles/reset.css"
import QueryProvider from '@tookscan/components/QueryProvider'
import SpriteSheet from '@tookscan/components/ui/Icon/SpriteSheet'
import { LayoutProps } from '@/types/common'
import Header from '@tookscan/components/ui/Header'
import Footer from '@tookscan/components/ui/Footer'

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {SpriteSheet}
        <QueryProvider>
          <div className="relative flex min-h-screen flex-col">
            <div className="fixed left-0 top-0 z-50 w-full">
              <Header type="default" />
            </div>
            <main className="flex-1 overflow-hidden pt-[90px]">{children}</main>
            <div className="mt-auto">
              <Footer />
            </div>
          </div>
        </QueryProvider>
      </body>
    </html>
  )
}
