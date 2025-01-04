'use client'

import React from 'react'
import Icon from '@/app/_components/icon/Icon'

interface SmallCardProps {
  iconId: string
  title: string
  description: string
  size?: 'lg' // props로 size를 받지만 기본값은 lg로 하드코딩
}

const SmallCard = ({
  iconId,
  title,
  description,
  size = 'lg',
}: SmallCardProps) => {
  return (
    <div
      className="flex items-center rounded-lg bg-blue-secondary shadow-md"
      style={{
        width: size === 'lg' ? '200px' : '160px',
        height: size === 'lg' ? '70px' : '50px',
        padding: size === 'lg' ? '12px' : '8px',
      }}
    >
      {/* 아이콘 */}
      <div
        className="flex items-center justify-center rounded-full bg-white"
        style={{
          width: size === 'lg' ? '40px' : '24px', // 아이콘 크기
          height: size === 'lg' ? '40px' : '24px',
        }}
      >
        <Icon id={iconId} width={40} height={40} className="fill-current" />
      </div>

      {/* 텍스트 */}
      <div className="ml-4">
        <h3
          className="font-bold text-blue-primary"
          style={{
            fontSize: size === 'lg' ? '14px' : '10px', // 텍스트 크기
          }}
        >
          {title}
        </h3>
        <p
          className="text-black-800"
          style={{
            fontSize: size === 'lg' ? '12px' : '8px',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default SmallCard
