'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/app/_components/ui/Button'

import KakaoCircle from '@/assets/images/login/KakaoCircle.svg'
import GoogleCircle from '@/assets/images/login/GoogleCircle.svg'
import CopyIcon from '@/assets/images/login/Copy.svg'

interface ModalProps {
  type: 'input' | 'message' | 'external' // 모달 종류
  title: string // 동적 타이틀
  content?: string // 메시지 또는 텍스트 내용
  icon?: 'kakao' | 'google' // 외부 링크 아이콘
  onClose: () => void // 닫기 핸들러
}

const Modal = ({ type, title, content, icon, onClose }: ModalProps) => {
  const renderContent = () => {
    if (type === 'input') {
      return (
        <div className="flex items-center justify-between rounded-lg bg-gray-100 px-4 py-2">
          <span className="text-black">{content}</span>
          {/* 복사 버튼 */}
          <button
            onClick={() => navigator.clipboard.writeText(content || '')}
            className="ml-2"
          >
            <Image
              src={CopyIcon}
              alt="복사 아이콘"
              className="h-4 w-4 cursor-pointer"
              width={8}
              height={8}
            />
          </button>
        </div>
      )
    }

    if (type === 'message') {
      return <p className="text-black">{content}</p>
    }

    if (type === 'external') {
      const iconSrc = icon === 'kakao' ? KakaoCircle : GoogleCircle
      return (
        <div className="flex flex-col items-center">
          <Image
            src={iconSrc}
            alt={`${icon || ''} 아이콘`}
            className="h-12 w-12"
            width={48}
            height={48}
          />
          <p className="mt-4 text-sm text-black">
            외부 SNS계정을 통해 가입된 사용자입니다.
          </p>
        </div>
      )
    }
  }

  const renderButtons = () => {
    if (type === 'input') {
      return (
        <div className="flex">
          {/* 닫기 버튼 */}
          <Button
            variant="secondary"
            size="lg"
            onClick={onClose}
            className="flex-1 rounded-none rounded-bl-lg"
          >
            닫기
          </Button>
          {/* 로그인 버튼 */}
          <Link href="/signin" className="flex-1">
            <Button
              variant="primary"
              size="lg"
              className="w-full rounded-none rounded-br-lg"
            >
              로그인
            </Button>
          </Link>
        </div>
      )
    }

    return (
      <div>
        <Button
          variant="primary"
          size="lg"
          onClick={onClose}
          className="w-full rounded-none rounded-b-lg"
        >
          닫기
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="relative w-[400px] bg-white shadow-lg"
        style={{
          borderRadius: '16px 16px 24px 24px', // 상단 16px, 하단 24px
          overflow: 'hidden',
        }}
      >
        {/* 타이틀 */}
        <div className="pt-6 text-center text-lg font-bold text-black">
          {title}
        </div>
        {/* 디바이더 */}
        <div className="mt-4 h-[1px] w-full bg-gray-300"></div>
        {/* 컨텐츠 */}
        <div className="px-6 py-8">{renderContent()}</div>
        {/* 버튼 */}
        <div>{renderButtons()}</div>
      </div>
    </div>
  )
}

export default Modal
