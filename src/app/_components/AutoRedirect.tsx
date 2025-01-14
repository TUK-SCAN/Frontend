'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Head from 'next/head'

interface AutoRedirectProps {
  to: string
  title: string
}

export default function AutoRedirect({ to, title }: AutoRedirectProps) {
  const router = useRouter()

  useEffect(() => {
    router.replace(to, { scroll: false })
  }, [to])

  return (
    <Head>
      <title>{title} - TOOK SCAN</title>
      <meta name="robots" content="noindex" />
    </Head>
  )
}
