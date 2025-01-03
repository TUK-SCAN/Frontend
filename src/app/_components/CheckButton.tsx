'use client'
import { useState } from 'react'
import Icon from './icon/Icon'

type CheckButtonProps = {
  size: 'small' | 'big'
}

const CheckButton = ({ size }: CheckButtonProps) => {
  const [isChecked, setIsChecked] = useState(false)

  const buttonSize = size === 'big' ? 'h-[24px] w-[24px]' : 'h-[16px] w-[16px]'
  const iconSize =
    size === 'big' ? { width: 16, height: 16 } : { width: 10, height: 10 }

  return (
    <div className="flex h-[56px] items-center justify-between px-4 py-2">
      <button
        className={`flex items-center justify-center rounded-full ${buttonSize} ${
          isChecked
            ? 'bg-blue-500 text-white'
            : 'border border-gray-300 bg-white'
        }`}
        onClick={() => setIsChecked(!isChecked)}
      >
        {isChecked && <Icon id="check" {...iconSize} />}
      </button>
    </div>
  )
}

export default CheckButton
