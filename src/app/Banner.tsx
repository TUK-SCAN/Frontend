'use client'

import * as React from 'react'
import Logo from '../icon/LogoSpriteSheet.svg'

const Banner = () => {
  return<div className="flex flex-col gap-4 bg-gray-100 p-8">
    <div className="flex items-center justify-center rounded-lg bg-blue-primary py-8 text-white">
      <div className="text-center"></div>
      <Logo></Logo>
    </div>
  </div>
}
export default Banner
