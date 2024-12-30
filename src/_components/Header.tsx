'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from './Button' // Button 컴포넌트 경로 확인

interface HeaderProps {
  type:
    | 'default'
    | 'profile'
    | 'guest'
    | 'logged-in'
    | 'compact-default'
    | 'compact-profile'
  userName?: string // 로그인된 사용자 이름
  onLogin?: () => void // 로그인 버튼 클릭 이벤트
  onInquiry?: () => void // 문의하기 버튼 클릭 이벤트
  onLogoClick?: () => void // 로고 클릭 이벤트
}

const Header: React.FC<HeaderProps> = ({
  type,
  userName,
  onLogin,
  onInquiry,
  onLogoClick,
}) => {
  const headerHeight = type.includes('compact') ? '64px' : '90px'

  // 아이콘 크기 조건 설정
  const isCompact = type.includes('compact') // compact 헤더 여부 확인
  const iconWidth = isCompact ? 52 : 80 // compact일 경우 52px, 아니면 80px
  const iconHeight = isCompact ? 24 : 36 // compact일 경우 24px, 아니면 36px

  // 텍스트 크기 조건 설정
  const textSize = isCompact ? 'text-[12px]' : 'text-[14px]'

  return (
    <header
      className={`flex w-full items-center justify-between bg-white px-6 ${isCompact ? 'lg:hidden' : 'hidden lg:flex'}`}
      style={{ height: headerHeight }}
    >
      {/* 왼쪽: 아이콘 */}
      <div className="flex items-center">
        <button onClick={onLogoClick} className="focus:outline-none">
          <Image
            src="/logo.png"
            alt="Logo"
            width={iconWidth} // 조건부 가로 크기
            height={iconHeight} // 조건부 세로 크기
          />
        </button>
      </div>

      {/* 오른쪽: 타입에 따라 다르게 표시 */}
      <div className={`flex items-center gap-4 ${textSize}`}>
        {type === 'default' && (
          <>
            <button className="text-black hover:underline" onClick={onInquiry}>
              문의하기
            </button>
            <Button
              variant="primary"
              size="sm"
              className="w-[94px]" // 로그인 버튼의 기본 가로 길이 설정
              onClick={onLogin}
            >
              로그인
            </Button>
          </>
        )}
        {type === 'profile' && (
          <>
            <button className="text-black hover:underline" onClick={onInquiry}>
              문의하기
            </button>
            <button className="flex items-center">
              <Image
                src="/profile.png"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </button>
          </>
        )}
        {type === 'guest' && (
          <>
            <button className="text-blue-500 hover:underline">로그인</button>
            <span className="text-gray-400">|</span>
            <button className="text-black hover:underline">
              비회원 주문조회
            </button>
            <button className="text-black hover:underline">회원가입</button>
          </>
        )}
        {type === 'logged-in' && (
          <>
            <span className="text-blue-500">{userName}</span>
            <span className="text-gray-400">|</span>
            <button className="text-black hover:underline">마이페이지</button>
            <button className="text-black hover:underline">로그아웃</button>
          </>
        )}
        {(type === 'compact-default' || type === 'compact-profile') && (
          <>
            <button className="text-black hover:underline" onClick={onInquiry}>
              문의하기
            </button>
            {type === 'compact-default' ? (
              <Button
                variant="primary"
                size="sm"
                className="w-[94px]" // 로그인 버튼의 기본 가로 길이 설정
                onClick={onLogin}
              >
                로그인
              </Button>
            ) : (
              <button className="flex items-center">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </button>
            )}
          </>
        )}
      </div>
    </header>
  )
}

export default Header
