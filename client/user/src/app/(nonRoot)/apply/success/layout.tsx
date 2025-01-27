import React from 'react'
import { LayoutProps } from '@/types/common'
const layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-full justify-center px-36 pb-12 pt-20">
      {children}
    </div>
  )
}

export default layout
