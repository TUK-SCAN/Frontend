'use client'

import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[400px] rounded-lg bg-white p-6 shadow-lg">
        {/* Title */}
        {title && (
          <div>
            <h2 className="mb-4 text-lg font-bold text-gray-800">{title}</h2>
            <div className="full mb-4 h-[2px] bg-gray-300"></div>{' '}
            {/* Divider */}
          </div>
        )}
        {/* Content */}
        <div className="mb-6 text-sm text-gray-600">{children}</div>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full rounded-md bg-gray-200 py-2 text-sm font-medium text-gray-600 hover:bg-gray-300"
        >
          닫기
        </button>
      </div>
    </div>
  )
}

export default Modal
