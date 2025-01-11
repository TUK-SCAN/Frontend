'use client'
import Purchase from '@/app/(user)/(nonRoot)/apply/_components/Purchase'
import { useState } from 'react'
import { Books } from '@/types/common'
const Apply = () => {
  const [books, setBooks] = useState<Books[]>([])
  const handleRemoveBook = (id: number) => {
    setBooks((prev) => prev.filter((book) => book.id !== id))
  }
  return (
    <div>
      <Purchase books={books} onDelete={handleRemoveBook} />
    </div>
  )
}

export default Apply
