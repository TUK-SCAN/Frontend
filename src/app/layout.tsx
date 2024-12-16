import './globals.css'
import QueryProvider from './QueryProvider' // React Query 클라이언트 설정을 분리

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
