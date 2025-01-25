import { useApplyContext } from '@/app/(nonRoot)/apply/_contexts/ApplyContext'
import { Button } from '@tookscan/components/ui/Button'
import {
  calculateTotalPrice,
  hasNonDropBooks,
} from '@/app/(nonRoot)/apply/_utils/calculateBookPrice'
import clsx from 'clsx'
import { BookInCart } from '@/app/(nonRoot)/apply/_components/index'

const Purchase = () => {
  const { books, pageIndex, setPageIndex, terms } = useApplyContext()

  return (
    <div
      className={clsx(
        'flex w-full flex-col gap-6 rounded-3xl bg-white px-6 pb-8 pt-3'
      )}
    >
      <div
        className={clsx(
          'flex justify-between border-b border-black-800 px-3 py-6 text-2xl font-bold'
        )}
      >
        <h2 className="">예상 총 금액</h2>
        <p className="text-blue-primary">
          {calculateTotalPrice({ books }).toLocaleString()}원
        </p>
      </div>
      <hr className="-mt-6 border-[1px]" />
      <div className={clsx('w-full rounded-xl bg-blue-secondary p-6')}>
        <ul className="flex flex-col gap-2">
          {books.map((book) => (
            <li key={book.id}>
              <BookInCart {...book} />
            </li>
          ))}
        </ul>

        <div className={clsx('flex items-center justify-between px-4 pt-8')}>
          <p className="font-semibold">배송비</p>
          <p>
            {hasNonDropBooks(books) ? (
              '2,500원'
            ) : (
              <span className="text-lg text-blue-primary">
                <del className="text-black">2,500원</del> 0원
              </span>
            )}
          </p>
        </div>
      </div>
      <Button
        size="lg"
        className="w-full"
        disabled={
          books.length === 0 ||
          (!(terms.terms1 && terms.terms2 && terms.terms3) && pageIndex === 2)
        }
        onClick={() => {
          if (pageIndex === 0 || pageIndex === 1) {
            setPageIndex((prev: number) => prev + 1)
          } else if (pageIndex === 2) {
            console.log('결제하기')
          }
        }}
      >
        {pageIndex === 2 ? '결제하기' : '다음'}
      </Button>
    </div>
  )
}

export default Purchase
