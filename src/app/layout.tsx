import '../styles/globals.css'
import '../styles/reset.css'
import QueryProvider from './_components/QueryProvider' // React Query 클라이언트 설정을 분리

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <QueryProvider>{children}</QueryProvider>
        </div>
      </body>
    </html>
  )
}
