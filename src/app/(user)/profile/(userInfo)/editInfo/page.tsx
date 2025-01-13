'use client'
import React from 'react'
import UserInfoLayout from '../layout'

const EditInfoPage = () => {
  return (
    <UserInfoLayout
      content={
        <div>
          <div>
            <label className="mb-2 block text-sm font-medium" htmlFor="name">
              성함 *
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-md border border-gray-300 p-3"
              placeholder="이정재"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium" htmlFor="id">
              아이디 *
            </label>
            <input
              type="text"
              id="id"
              className="w-full rounded-md border border-gray-300 p-3"
              placeholder="아이디칸"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium" htmlFor="phone">
              전화번호 *
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                id="phone"
                className="flex-1 rounded-md border border-gray-300 p-3"
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

          <div>
            <label className="mb-2 block text-sm font-medium" htmlFor="email">
              이메일 *
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border border-gray-300 p-3"
              placeholder="@gmail.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium" htmlFor="address">
              주소 *
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                id="address"
                className="flex-1 rounded-md border border-gray-300 p-3"
                placeholder="주소입력"
              />
              <button
                type="button"
                className="rounded-md bg-blue-500 px-6 py-3 text-white"
              >
                주소검색
              </button>
            </div>
            <input
              type="text"
              className="mt-4 w-full rounded-md border border-gray-300 p-3"
              placeholder="상세주소를 입력해주세요."
            />
          </div>
        </div>
      }
    />
  )
}

export default EditInfoPage
