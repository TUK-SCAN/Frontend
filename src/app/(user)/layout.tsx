'use client'

import React from 'react'
import Header from '../_components/ui/Header'
import Footer from '../_components/ui/Footer'
import { LayoutProps } from '@/types/common'

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="fixed left-0 top-0 z-50 w-full">
        <Header type="default" />
      </div>
      <main
        className="flex-1 overflow-hidden"
        style={{
          paddingTop: '90px',
        }}
      >
        {children}
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
   