'use client'
import React, { useState } from 'react'
import Banner from '@/app/_components/ui/banner/Banner'

const Layout = () => {
  const [activeTab, setActiveTab] = useState('')

  const buttonInfo = [
    { key: 'privacy', text: '개인정보 수집목적 및 이용목적' },
    { key: 'terms', text: '수집하는 개인정보 항목' },
    {
      key: 'consent',
      text: '서비스 부정이용자 처리과정에서의 정보 수집 및 처리 방법',
    },
    { key: 'usage', text: '서비스 이용과정에서 수집될 수 있는 정보' },
    { key: 'collection', text: '개인정보의 수집 방법' },
  ]

  const renderButton = (button) => (
    <button
      key={button.key}
      onClick={() => setActiveTab(button.key)}
      className={`mx-1 flex h-[32px] w-[180px] flex-row items-center justify-center overflow-hidden rounded-2xl duration-200 ${activeTab === button.key ? 'bg-blue-500 text-white' : 'border border-blue-500 text-blue-500'}`}
    >
      {button.text}
    </button>
  )

  return (
    <div>
      <Banner type={1} />
      <main className="flex flex-1 items-center justify-center bg-blue-secondary">
        <div className="w-[1152px] items-start pb-[100px] pt-[100px]">
          <div className="text-black i flex flex-col px-8 py-8">
            <h1 className="flex items-start text-[32px] font-bold">
              약관을 확인해주세요
            </h1>
          </div>
          <div className="flex px-8">
            <div className="flex text-[14px]">
              {buttonInfo.map(renderButton)}
            </div>
          </div>
          <div className="mx-8 mt-8 flex flex-col rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-[16px]">개인정보 수집목적 및 이용목적</h2>
            <p className="text-gray-800">
              회사는 다음의 목적을 위하여 개인정보를 처리합니다. 제 처리하는
              개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용
              목적이 변경될 경우에는 개인정보보호법 등 관련법령에 따라 별도의
              동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
            <ul className="my-4 list-inside list-disc text-gray-800">
              <li>홈페이지 회원 가입 및 관리</li>
              <li>고객 문의 응대, 서비스 제공 및 계약의 이행</li>
              <li>신규 서비스 개발 및 마케팅, 광고에 활용</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Layout
