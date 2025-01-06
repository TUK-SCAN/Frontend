'use client'

import React from 'react'
import Link from 'next/link'
import Icon from '../icon/Icon'

interface HeaderProps {
  type: 'default' | 'logged-in'
  userName?: string
  onLogoClick?: () => void
}

const Header: React.FC<HeaderProps> = ({ type, userName, onLogoClick }) => {
  const isMobile = false
  const textSize = isMobile ? 'text-[12px]' : 'text-[14px]'

  return (
    <header
      className="flex w-full items-center justify-between bg-white px-6 lg:px-12"
      style={{ height: isMobile ? '64px' : '90px' }}
    >
      {/* 로고 */}
      <Link href="/" className="focus:outline-none">
        <Icon
          id="logo"
          className="text-blue-primary"
          width={isMobile ? 52 : 80}
          height={isMobile ? 24 : 36}
        />
      </Link>

      {/* 텍스트 */}
      <div className={`flex items-center gap-4 ${textSize}`}>
        {type === 'default' && (
          <>
            <Link href="/login" className="text-blue-primary hover:underline">
              로그인
            </Link>
            <span className="text-black">|</span>
            <Link href="/guest-order" className="text-black hover:underline">
              비회원 주문조회
            </Link>
            <Link href="/signup" className="text-black hover:underline">
              회원가입
            </Link>
          </>
        )}
        {type === 'logged-in' && (
          <>
            <span className="text-blue-primary">{userName}</span>
            <span className="text-black">|</span>
            <Link href="/mypage" className="text-black hover:underline">
              마이페이지
            </Link>
            <Link href="/logout" className="text-black hover:underline">
              로그아웃
            </Link>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
