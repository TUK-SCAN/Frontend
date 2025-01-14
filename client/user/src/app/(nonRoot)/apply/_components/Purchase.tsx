import { Books } from '@/types/common'
import clsx from 'clsx'

interface PurchaseProps {
  books: Books[]
  onDelete: (id: number) => void
}

const Purchase = ({ books, onDelete }: PurchaseProps) => {
  const PRICE_PER_PAGE = 10

  const calculateTotalPrice = () => {
    return books.reduce((total, book) => {
      const pageCost = book.pages * PRICE_PER_PAGE
      const restoreCost =
        book.restoreOption === 'loose'
          ? 5000
          : book.restoreOption === 'spiral'
            ? 2500
            : 0

      return total + pageCost + restoreCost
    }, 0)
  }

  return (
    <div className={clsx('gap-6 rounded-3xl bg-white px-6 pb-8 pt-3')}>
      <div className={clsx('flex justify-between px-3 py-6')}>
        <h2 className="text-2xl font-bold">총 금액</h2>
        <p className="text-sm text-gray-500">{calculateTotalPrice()}원</p>
      </div>
    </div>
  )
}

export default Purchase
