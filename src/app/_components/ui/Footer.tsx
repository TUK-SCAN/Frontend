'use client'

import React from 'react'
import Icon from '../ui/Icon/Icon' // Icon 컴포넌트 경로를 적절히 수정해주세요.

const Footer = () => {
  return (
    <footer className="w-full bg-white px-6 py-8 lg:px-[96px] lg:py-[32px]">
      {/* 로고와 슬로건 */}
      <div className="flex flex-col items-start">
        {/* 로고 */}
        <div className="h-[60px] w-[60px]">
          <Icon
            id="logo"
            width={60}
            height={60}
            className="text-blue-primary"
          />
        </div>

        {/* 슬로건 텍스트 */}
        <div className="mt-4 text-black">
          <p className="text-[12px] lg:text-[18px]">
            상쾌한 대학생활을 위한 스캔
          </p>
          <p className="text-[12px] lg:text-[18px]">한 방에 툭스캔</p>
        </div>

        {/* 공백 */}
        <div className="h-[12px]" />

        {/* 주소 */}
        <p className="text-[10px] text-black lg:text-[14px]">
          인천시 서구 서곶로 50 204동 3005호
        </p>

        {/* 공백 */}
        <div className="h-[12px]" />

        {/* 대표자 정보 */}
        <p className="text-[10px] text-black/55 lg:text-[14px]">
          대표자 민경훈 | mkh09290929@naver.com | 010-7604-8320
        </p>
        <p className="text-[10px] text-black/55 lg:text-[14px]">
          이용약관 | 개인정보 처리방침
        </p>

        {/* 공백 */}
        <div className="h-[12px]" />

        {/* 저작권 텍스트 */}
        <p className="text-[10px] text-black/55 lg:text-[14px]">
          © 툭스캔. All rights reserved | 207-08-81158
        </p>
      </div>
    </footer>
  )
}

export default Footer
