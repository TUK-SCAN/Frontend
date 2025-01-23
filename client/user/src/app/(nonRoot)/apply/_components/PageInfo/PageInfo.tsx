import React from 'react'
import clsx from 'clsx'
import Icon from '@tookscan/components/ui/Icon/Icon'
import { useApplyContext } from '@/app/(nonRoot)/apply/_contexts/ApplyContext'

interface PageInfoProps {
  pageIndex: number
  setPageIndex: React.Dispatch<React.SetStateAction<number>>
}

const stepDescriptions: Record<number, string> = {
  0: '스캔할 책의 정보를 작성해주세요.',
  1: '책을 돌려받을 배송 정보를 입력해주세요.',
  2: '이용 약관에 동의해주세요.',
}

const PageInfo = () => {
  const { pageIndex, setPageIndex } = useApplyContext()
  const handleGoBack = () => {
    if (pageIndex === 1 || pageIndex === 2)
      setPageIndex((prev: number) => prev - 1)
  }
  return (
    <div className={clsx('flex flex-col gap-6')}>
      <div className={clsx('flex flex-row gap-4')}>
        {[0, 1, 2].map((index) => (
          <Icon
            key={index}
            id="ellipse"
            width={16}
            height={16}
            className={clsx(
              index === pageIndex ? 'text-blue-primary' : 'text-gray-300'
            )}
          />
        ))}
      </div>
      <div className="gap-2">
        <h2 className={clsx('text-2xl font-semibold text-blue-primary')}>
          STEP {pageIndex + 1}.
        </h2>
        <h2 className={clsx('text-4xl font-bold')}>스캔정보 입력</h2>
      </div>
      <p className="text-xl text-black-800">
        {stepDescriptions[pageIndex] || '잘못된 단계입니다.'}
      </p>
      {pageIndex !== 0 && (
        <button
          className={clsx('flex text-xl text-blue-primary')}
          onClick={handleGoBack}
        >
          &lt; 이전으로
        </button>
      )}
    </div>
  )
}

export default PageInfo
