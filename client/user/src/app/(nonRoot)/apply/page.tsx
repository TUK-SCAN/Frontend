'use client'
import { useState } from 'react'
import { Books } from '@/types/common'
import Purchase from '@/app/(nonRoot)/apply/_components/Purchase'
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
