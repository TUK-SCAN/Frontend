import React from 'react'
import Banner from '@/app/_components/ui/Banner/Banner'
import { LayoutProps } from '@/types/common'

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col">
      <Banner type={1} />
      {children}
    </div>
  )
}
