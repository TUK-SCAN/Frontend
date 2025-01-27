import { createContext, useContext, useRef, ReactNode, useState } from 'react'
import {
  Books,
  ShippingInfo,
  initialShippingInfo,
  Terms,
  initialTerms,
} from '@/types/book'

interface ApplyContextType {
  pageIndex: number
  setPageIndex: React.Dispatch<React.SetStateAction<number>>
  books: Books[]
  setBooks: React.Dispatch<React.SetStateAction<Books[]>>
  shippingInfoRef: React.MutableRefObject<ShippingInfo>
  updateShippingInfo: (key: keyof ShippingInfo, value: string) => void
  terms: Terms
  setTerms: (terms: Terms) => void
  ignoreBeforeUnload: React.MutableRefObject<boolean>
}

const ApplyContext = createContext<ApplyContextType | undefined>(undefined)

export const ApplyProvider = ({ children }: { children: ReactNode }) => {
  const [pageIndex, setPageIndex] = useState<number>(0)
  const [books, setBooks] = useState<Books[]>([])
  const shippingInfoRef = useRef<ShippingInfo>(initialShippingInfo)
  const [terms, setTerms] = useState<Terms>(initialTerms)
  const ignoreBeforeUnload = useRef<boolean>(false)

  const updateShippingInfo = (key: keyof ShippingInfo, value: string) => {
    shippingInfoRef.current[key] = value
  }

  return (
    <ApplyContext.Provider
      value={{
        pageIndex,
        setPageIndex,
        books,
        setBooks,
        shippingInfoRef,
        updateShippingInfo,
        terms,
        setTerms,
        ignoreBeforeUnload,
      }}
    >
      {children}
    </ApplyContext.Provider>
  )
}

export const useApplyContext = () => {
  const context = useContext(ApplyContext)
  if (!context) {
    throw new Error('useApplyContext must be used within an ApplyProvider')
  }
  return context
}
