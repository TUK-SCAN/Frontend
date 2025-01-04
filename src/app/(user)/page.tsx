'use client'

import React, { useRef, useEffect, useState } from 'react'
import FirstPage from './_components/ScrollPages/1stPage'
import SecondPage from './_components/ScrollPages/2stPage'
import ThirdPage from './_components/ScrollPages/3stPage'
import FourthPage from './_components/ScrollPages/4stPage'
import FifthPage from './_components/ScrollPages/5stPage'

const FullScrollPage = () => {
  const sectionsRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const handleScroll = (event: WheelEvent) => {
    event.preventDefault()

    if (isScrolling) return

    const delta = event.deltaY
    const sections = sectionsRef.current?.children

    if (!sections) return

    if (delta > 0 && currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1)
    } else if (delta < 0 && currentSection > 0) {
      setCurrentSection((prev) => prev - 1)
    }

    setIsScrolling(true)
    setTimeout(() => {
      setIsScrolling(false)
    }, 700)
  }

  useEffect(() => {
    const container = sectionsRef.current
    if (!container) return

    window.addEventListener('wheel', handleScroll, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [currentSection, isScrolling])

  useEffect(() => {
    const sections = sectionsRef.current?.children
    if (!sections) return

    if (currentSection >= 0 && currentSection < sections.length) {
      const target = sections[currentSection] as HTMLElement
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [currentSection])

  return (
    <div ref={sectionsRef} className="relative h-screen overflow-hidden">
      <section
        className="flex h-screen items-center justify-center bg-blue-primary"
        style={{ paddingTop: '90px' }}
      >
        <FirstPage />
      </section>

      <section className="flex h-screen items-center justify-center">
        <SecondPage />
      </section>

      <section className="flex h-screen items-center justify-center">
        <ThirdPage />
      </section>

      <section className="flex h-screen items-center justify-center">
        <FourthPage />
      </section>

      <section className="flex h-screen items-center justify-center">
        <FifthPage />
      </section>
    </div>
  )
}

export default FullScrollPage
