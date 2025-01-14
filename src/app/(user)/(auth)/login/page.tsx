'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import InputField from '@/app/_components/ui/InputField'
import CheckButton from '@/app/_components/CheckButton'
import { Button } from '@/app/_components/ui/Button'

import KakaoIcon from '@/assets/images/signup/Kakao.svg'
import GoogleIcon from '@/assets/images/signup/Google.svg'

const LoginPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-blue-secondary">
      {/* 타이틀 */}
      <div className="mt-10 w-[440px] text-left">
        <div className="text-xs font-bold text-blue-primary">
          툭스캔과 함께해요!
        </div>
        <div className="mt-2 text-lg font-bold leading-tight text-black-800">
          <p>툭스캔과 함께라면</p>
          <p>간편해지는 나의 생활</p>
        </div>
      </div>

      {/* 로그인 박스 */}
      <div className="mt-6 w-[440px] rounded-lg bg-white p-6 shadow-md">
        <div className="text-center text-lg font-semibold text-blue-primary">
          로그인
        </div>
        <div className="mt-4 h-[2px] w-full bg-blue-primary"></div>

        {/* 체크박스 */}
        <div className="mt-4 flex justify-between px-6">
          <div className="flex items-center space-x-1">
            <CheckButton size="sm" />
            <span className="text-black-600">아이디 저장</span>
          </div>
          <div className="flex items-center space-x-1">
            <CheckButton size="sm" />
            <span className="text-black-600">자동 로그인</span>
          </div>
        </div>

        {/* 입력 필드 */}
        <div className="mt-4 space-y-4">
          <InputField
            type="simple"
            placeholder="아이디"
            onChange={(e) => console.log(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="비밀번호"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>

        {/* 아이디/비밀번호 찾기 */}
        <div className="mt-6 flex justify-end text-xs text-gray-500">
          <Link href="/find">아이디 · 비밀번호 찾기</Link>
        </div>

        {/* 로그인 버튼 */}
        <Button
          className="mt-8 w-full"
          variant="primary"
          size="custom"
          onClick={() => console.log('로그인 버튼 클릭')}
        >
          로그인
        </Button>

        {/* SNS 로그인 */}
        <div className="mt-10 flex items-center space-x-4">
          <div className="h-px flex-grow bg-gray-300"></div>
          <span className="text-sm text-gray-500">SNS 로그인</span>
          <div className="h-px flex-grow bg-gray-300"></div>
        </div>
        <div className="mt-8 flex flex-col space-y-2">
          {/* Kakao Login Button */}
          <button
            className="w-full"
            onClick={() => console.log('카카오 로그인')}
          >
            <Image
              src={KakaoIcon}
              alt="카카오 로그인"
              width={440}
              height={48}
              className="w-full"
            />
          </button>
          {/* Google Login Button */}
          <button className="w-full" onClick={() => console.log('구글 로그인')}>
            <Image
              src={GoogleIcon}
              alt="구글 로그인"
              width={440}
              height={48}
              className="w-full"
            />
          </button>
        </div>

        {/* "아직 계정이 없으신가요?" 박스 */}
        <div className="mt-12 w-full rounded-lg bg-blue-secondary p-4 text-center">
          <div className="text-sm font-semibold text-blue-primary">
            아직 계정이 없으신가요?
          </div>
          <div className="mt-2 text-xs text-black-600">
            회원가입을 통해 툭스캔의 모든 서비스를 이용할 수 있습니다.
          </div>
          {/* 회원가입 버튼 */}
          <Link href="/signin">
            <Button className="mt-4 w-full" variant="secondary" size="custom">
              회원가입
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
