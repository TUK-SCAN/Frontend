// 네이게이션 컴포넌트로 이동
// spa 싱글페이지 어플리케이션 적용하기
// 페이지 이동 시 spa가 아닌 방법으로 자동으로 reset페이지로 이동하기
// -> use reoter
'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Password = () => {
  const router = useRouter()
  useEffect(() => {
    router.replace('/password/reset')
  }, [])
  return null
}
export default Password
