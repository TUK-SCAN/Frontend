'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface AutoRedirectProps {
  to: string
}

export default function AutoRedirect({ to }: AutoRedirectProps) {
  const router = useRouter()

  useEffect(() => {
    router.replace(to, { scroll: false })
  }, [to])

  return <></>
}
