'use client'
import React from 'react'

const EditInfoPage = () => {
  return (
    <div>
      <div className="pb-[12px]">
        <label className="mb-2 flex flex-row text-sm font-medium">
          성함 <div className="ml-1 text-blue-primary">*</div>
        </label>
        <input
          type="text"
          id="name"
          className="h-[50px] w-[380px] rounded-md bg-blue-secondary px-[18px] py-[12px]"
          placeholder="저스틴"
        />
      </div>

      <div className="pb-[12px]">
        <label className="mb-2 flex flex-row text-sm font-medium">
          아이디 <div className="ml-1 text-blue-primary">*</div>
        </label>
        <input
          type="text"
          id="id"
          className="h-[50px] w-[380px] rounded-md bg-blue-secondary px-[18px] py-[12px]"
          placeholder="아이디"
        />
      </div>

      <div className="pb-[12px]">
        <label className="mb-2 flex flex-row text-sm font-medium">
          전화번호 <div className="ml-1 text-blue-primary">*</div>
        </label>
        <div className="flex gap-4">
          <input
            type="text"
            id="phone"
            className="h-[50px] w-[264px] rounded-md bg-blue-secondary px-[18px] py-[12px]"
            placeholder="010-1234-5678"
          />
          <button
            type="button"
            className="rounded-md bg-blue-500 px-6 py-3 text-white"
          >
            인증받기
          </button>
        </div>
      </div>

      <div className="pb-[12px]">
        <label className="mb-2 flex flex-row text-sm font-medium">
          이메일 <div className="ml-1 text-blue-primary">*</div>
        </label>
        <input
          type="email"
          id="email"
          className="h-[50px] w-[380px] rounded-md bg-blue-secondary px-[18px] py-[12px]"
          placeholder="@gmail.com"
        />
      </div>

      <div>
        <label className="mb-2 flex flex-row text-sm font-medium">
          주소 <div className="ml-1 text-blue-primary">*</div>
        </label>
        <div className="flex gap-4">
          <input
            type="text"
            id="address"
            className="h-[50px] w-[267px] rounded-md bg-blue-secondary px-[18px] py-[12px]"
            placeholder="주소입력"
          />
          <button
            type="button"
            className="rounded-md border border-blue-primary bg-white px-6 py-3 text-blue-primary"
          >
            주소검색
          </button>
        </div>
        <input
          type="text"
          className="mb-[100px] mt-4 h-[50px] w-[380px] rounded-md bg-blue-secondary px-[18px] py-[12px]"
          placeholder="상세주소를 입력해주세요."
        />
      </div>
      <button
        type="button"
        className="mt-4 h-[60px] w-[500px] rounded-md bg-blue-500 px-[28px] py-[18px] text-white"
      >
        변경
      </button>
    </div>
  )
}

export default EditInfoPage
