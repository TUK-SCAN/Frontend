'use client'
import { useState } from 'react'
import Icon from './icon/Icon'

const Accordion = () => {
  const [isChecked, setIsChecked] = useState(false) // 체크 상태
  const [isOpen, setIsOpen] = useState(false) // 아코디언 열림 상태

  return (
    <div className="w-[799px] rounded-lg border border-gray-300 shadow-sm">
      <div className="flex h-[56px] items-center justify-between px-4 py-2">
        <button
          className={`flex h-6 w-6 items-center justify-center rounded-full ${
            isChecked
              ? 'bg-blue-500 text-white'
              : 'border border-gray-300 bg-white'
          }`}
          onClick={() => setIsChecked(!isChecked)}
        >
          {isChecked && <Icon id="bigcheck" width={16} height={16} />}
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

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <div className="border-t border-gray-300 bg-gray-50 p-4">
          <p className="text-sm text-gray-800">아코디언 형식</p>
        </div>
      </div>
    </div>
  )
}

export default Accordion
