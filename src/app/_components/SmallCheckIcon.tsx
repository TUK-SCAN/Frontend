'use client'
import { useState } from 'react'
import Icon from './icon/Icon'

const CheckIcon = () => {
  const [isChecked, setIsChecked] = useState(false) // 체크 상태

  return (
    <div className="flex h-[56px] items-center justify-between px-4 py-2">
      <button
        className={`flex h-6 w-6 items-center justify-center rounded-full ${
          isChecked
            ? 'bg-blue-500 text-white'
            : 'border border-gray-300 bg-white'
        }`}
        onClick={() => setIsChecked(!isChecked)}
      >
        {isChecked && <Icon id="check" width={24} height={24} />}
      </button>
    </div>
  )
}
export default CheckIcon
