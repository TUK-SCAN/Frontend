'use client'
import { useState, ReactNode } from 'react'
import Icon from './icon/Icon'
import CheckButton from './CheckButton'

type AccordionProps = {
  title: string
  contents: ReactNode
}
const Accordion = ({ title, contents }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-[847px] rounded-lg border border-gray-300 shadow-sm">
      <div className="flex h-[56px] items-center justify-between px-4 py-2">
        <CheckButton size="big" />
        <span className="flex-1 text-start text-[24px] text-gray-800">
          {title}
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
        <div className="border-t border-gray-300 p-4">
          <p className="text-{14px} text-gray-600">{contents}</p>
        </div>
      </div>
    </div>
  )
}

export default Accordion
