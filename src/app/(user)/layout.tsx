'use client'
import React, { ReactNode } from 'react' // ReactNode 타입을 import 합니다.
import Header from '../_components/ui/Header'
import Footer from '../_components/ui/Footer'

interface LayoutProps {
  children: ReactNode // children의 타입을 ReactNode로 명시합니다.
}

const UserLayout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="fixed left-0 top-0 z-50 w-full">
        <Header type="default" />
      </div>
      <main className="flex-1 overflow-hidden" style={{ paddingTop: '90px' }}>
        {children}
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default UserLayout
