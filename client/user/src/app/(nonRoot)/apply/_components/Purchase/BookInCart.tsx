import { useApplyContext } from '@/app/(nonRoot)/apply/_contexts/ApplyContext'
import { Books } from '@/types/book'
import Icon from '@tookscan/components/ui/Icon/Icon'
import Tag from '@tookscan/components/ui/Tag/Tag'
import clsx from 'clsx'
import React from 'react'

const BookInCart = (book: Books) => {
  const { setBooks } = useApplyContext()
  return (
    <div
      className={clsx('flex w-full flex-col rounded-xl bg-white p-4 align-top')}
    >
      <div className={clsx('flex flex-row justify-between text-sm')}>
        <h2 className="text-sm font-semibold">{book.name}</h2>
        <button
          className="flex py-0.5"
          onClick={() => {
            setBooks((prevBooks: Books[]) =>
              prevBooks.filter((prevBook) => prevBook.id !== book.id)
            )
          }}
        >
          <Icon id="close" width={16} height={16} className="text-black" />
        </button>
      </div>

      <div className={clsx('flex flex-row justify-start gap-1 text-sm')}>
        <Tag type="default" size="sm" variant="secondary">
          {book.pages?.toLocaleString()} 페이지
        </Tag>
        <Tag type="default" size="sm" variant="secondary">
          {{
            drop: '버려줘요',
            loose: '낱장으로 받을게요',
            spiral: '스프링으로 묶어주세요',
            '': '알 수 없음',
          }[book.restoreOption] || '알 수 없음'}
        </Tag>
      </div>
      <h3 className="text-sm text-black-400">{}</h3>
    </div>
  )
}

export default BookInCart
