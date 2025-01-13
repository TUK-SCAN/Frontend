'use client'
import React, { ReactNode } from 'react'

interface UserInfoLayoutProps {
  content: ReactNode
}

const UserInfoLayout = ({ content }: UserInfoLayoutProps) => {
  console.log(content)
  return (
    <section className="w-[600px] justify-center rounded-lg bg-white p-[50px] shadow-sm">
      {content}
    </section>
  )
}

export default UserInfoLayout
