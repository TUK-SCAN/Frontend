'use client'
import { useState } from 'react'
import Icon from './icon/Icon'

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false) // 체크 상태
  const [isOpen, setIsOpen] = useState(false) // 드롭다운 열림 상태

  return (
    <div className="w-[799px] rounded-lg border border-gray-300 shadow-sm">
      {/* Main Container */}
      <div className="flex h-[56px] items-center justify-between px-4 py-2">
        <button
          className={`flex h-6 w-6 items-center justify-center rounded-full ${
            isChecked
              ? 'bg-blue-500 text-white'
              : 'border border-gray-300 bg-white'
          }`}
          onClick={() => setIsChecked(!isChecked)}
        >
          {isChecked && <Icon id="check" width={16} height={16} />}
        </button>

        <span className="flex-1 text-center text-sm text-gray-800">
          필수 입력 레이블
        </span>

        <button
          className="flex h-6 w-6 items-center justify-center text-gray-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon
            id="arrow"
            className={`transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="w-full border-t border-gray-300 bg-gray-50 p-4">
          <p className="text-sm text-gray-800">음 아직 미완성 ㅎㅎ</p>
        </div>
      )}
    </div>
  )
}

export default CheckBox
