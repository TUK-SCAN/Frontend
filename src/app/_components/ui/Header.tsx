'use client'

import React from 'react'
import Icon from '../icon/Icon'

interface HeaderProps {
  type: 'default' | 'logged-in' // 헤더 타입
  userName?: string // 로그인한 사용자 이름
}

const Header = ({ type, userName }: HeaderProps) => {
  const isMobile = false
  const textSize = isMobile ? 'text-[12px]' : 'text-[14px]'

  return (
    <header
      className="flex w-full items-center justify-between bg-white px-6 lg:px-12"
      style={{ height: isMobile ? '64px' : '90px' }}
    >
      {/* 로고 */}
      <button
        onClick={() => {
          // 로고 클릭 시 항상 메인 페이지로 이동
          window.location.href = '/'
        }}
        className="focus:outline-none"
      >
        <Icon
          id="logo"
          className="text-blue-primary"
          width={isMobile ? 52 : 80}
          height={isMobile ? 24 : 36}
        />
      </button>

      {/* 텍스트 */}
      <div className={`flex items-center gap-4 ${textSize}`}>
        {type === 'default' && (
          <>
            <button
              className="text-blue-primary hover:underline"
              onClick={() => (window.location.href = '/login')}
            >
              로그인
            </button>
            <span className="text-black">|</span>
            <button
              className="text-black hover:underline"
              onClick={() => (window.location.href = '/guest-order')}
            >
              비회원 주문조회
            </button>
            <button
              className="text-black hover:underline"
              onClick={() => (window.location.href = '/signup')}
            >
              회원가입
            </button>
          </>
        )}
        {type === 'logged-in' && (
          <>
            {/* 사용자 이름 출력 */}
            <span className="text-blue-primary">{userName}</span>
            <span className="text-black">|</span>
            <button
              className="text-black hover:underline"
              onClick={() => (window.location.href = '/mypage')}
            >
              마이페이지
            </button>
            <button
              className="text-black hover:underline"
              onClick={() => (window.location.href = '/logout')}
            >
              로그아웃
            </button>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
