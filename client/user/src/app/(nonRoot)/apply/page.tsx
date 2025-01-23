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
  const { books } = useApplyContext()

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (books.length > 0) {
        event.preventDefault()
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [books])

  return (
    <>
      <Banner type={3} />
      <div className={clsx('flex w-full flex-col gap-6 px-36 py-20')}>
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
    </>
  )
}

const Apply = () => (
  <ApplyProvider>
    <ApplyContent />
  </ApplyProvider>
)

export default Apply
