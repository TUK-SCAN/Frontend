'use client'

import { useEffect } from 'react'
import clsx from 'clsx'
import Banner from '@tookscan/components/ui/Banner/Banner'
import { StepSheet, PageInfo, Purchase } from './_components/index'
import {
  ApplyProvider,
  useApplyContext,
} from '@/app/(nonRoot)/apply/_contexts/ApplyContext'
import Icon from '@tookscan/components/ui/Icon/Icon'

const ApplyContent = () => {
  const { books, ignoreBeforeUnload } = useApplyContext()

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (books.length > 0 && !ignoreBeforeUnload.current) {
        event.preventDefault()
        event.returnValue = '페이지를 나가시면 작성 중인 내용이 사라집니다! '
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [books])

  return (
    <div className="flex w-full flex-col items-center">
      <Banner type={3} />
      <div
        className={clsx(
          'flex w-full max-w-[1440px] flex-col items-center gap-6 px-36 py-20'
        )}
      >
        <PageInfo />
        <div className={clsx('flex w-full flex-row items-start gap-12')}>
          <StepSheet />

          {books.length > 0 ? (
            <Purchase />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center">
              <div className="flex h-full flex-col items-center justify-center">
                <Icon id="logo" className="text-blue-primary" />
                <p className="mt-8 text-2xl font-bold text-blue-primary">
                  Took Scan을 통해 고품질 스캔 파일을 이용해 보세요!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const Apply = () => (
  <ApplyProvider>
    <ApplyContent />
  </ApplyProvider>
)

export default Apply
