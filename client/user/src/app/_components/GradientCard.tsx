'use client'

import React from 'react'
import Image from 'next/image'

interface GradientCardProps {
  title: string
  description: string
  iconSrc: string // 이미지 경로
}

const GradientCard = ({ title, description, iconSrc }: GradientCardProps) => {
  return (
    <div
      className="relative flex flex-col justify-between p-6 shadow-md"
      style={{
        background: 'linear-gradient(to bottom, #5592FC, #9EC9FF)',
        width: '380px', // 고정 가로 길이
        height: '360px', // 고정 세로 길이
        borderRadius: '24px', // 라운드 처리
      }}
    >
      {/* 텍스트 영역 */}
      <div className="z-10">
        {/* 제목 */}
        <h3
          className="font-bold text-white"
          style={{
            fontSize: '24px', // 고정 텍스트 크기
          }}
        >
          {title.split(',').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < title.split(',').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h3>

        {/* 설명 */}
        <p
          className="leading-relaxed text-white"
          style={{
            fontSize: '16px', // 고정 설명 텍스트 크기
            marginTop: '8px',
          }}
        >
          {description.split(',').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < description.split(',').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>

      {/* 아이콘 */}
      <div
        className="absolute bottom-4 right-4 z-0"
        style={{
          width: '240px', // 아이콘 너비
          height: '240px', // 아이콘 높이
        }}
      >
        <Image
          src={iconSrc}
          alt="Card Icon"
          className="rounded-lg"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain', // 아이콘 크기 조정
          }}
        />
      </div>
    </div>
  )
}

export default GradientCard
