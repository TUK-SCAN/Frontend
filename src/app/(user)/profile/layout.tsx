'use client'
import React, { ReactNode, useState } from 'react'
import Banner from '@/app/_components/ui/banner/Banner'

interface ProfileLayoutProps {
  children: ReactNode // children의 타입을 명시합니다.
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const items = ['개인정보 수정', '비밀번호 변경', '주문내역 조회']

  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div>
      <Banner type={3} />
      <main
        className="flex-1 overflow-hidden bg-blue-secondary"
        style={{ paddingTop: '90px' }}
      >
        <div className="mx-auto mb-[80px] mt-[80px] flex max-w-7xl gap-6 px-6">
          <aside className="rounded-lg p-6">
            <h2 className="mb-[24px] mt-[50px] w-[250px] text-[32px] font-bold">
              마이페이지
            </h2>
            <ul className="flex w-[250px] flex-col text-[16px]">
              {items.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`cursor-pointer p-4 text-start ${activeIndex === index ? 'bg-blue-primary text-white' : 'text-blue-primary'} hover:bg-blue-500 hover:text-white`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
          {children}
        </div>
      </main>
    </div>
  )
}

export default ProfileLayout
