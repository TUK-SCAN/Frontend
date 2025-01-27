'use client'

import React, { createContext, useState, ReactNode } from 'react'
import Modal from '../ui/Modal/Modal'

interface ModalContextType {
  openModal: (content: ReactNode) => void
  closeModal: () => void
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
)

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null)
  const [modalType, setModalType] = useState<string | null>(null)

  const openModal = (type: string, content: ReactNode) => {
    setModalContent(content)
    setModalType(type)
  }

  const closeModal = () => {
    setModalContent(null)
    setModalType(null)
  }

  return (
    <ModalContext.Provider
      value={{
        openModal: (content: ReactNode) => openModal('info', content),
        closeModal,
      }}
    >
      {children}
      {modalContent && modalType && (
        <Modal type={modalType}>{modalContent}</Modal>
      )}
    </ModalContext.Provider>
  )
}
