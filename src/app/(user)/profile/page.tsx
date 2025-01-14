'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const App = () => {
  const router = useRouter()
  useEffect(() => {
    router.replace('/profile/editInfo')
  })
  return
}

export default App
