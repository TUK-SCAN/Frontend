'use client'

import React from 'react'
import Image from 'next/image'
import ReviewCard from '../ReviewCard'
import MainCard from '@/assets/images/landing/MainCard.svg'

const reviews = [
  {
    review: '편리하고 좋아요!',
    name: '이영희',
    rating: 3,
    imageSrc: '/path-to-image/user1.jpg',
  },
  {
    review: '정말 만족합니다!',
    name: '김철수',
    rating: 2,
    imageSrc: '/path-to-image/user2.jpg',
  },
  {
    review: '서비스 최고예요!',
    name: '박지민',
    rating: 5,
    imageSrc: '/path-to-image/user3.jpg',
  },
  {
    review: '또 이용할게요!',
    name: '최유리',
    rating: 4,
    imageSrc: '/path-to-image/user4.jpg',
  },
  {
    review: '추천합니다!',
    name: '한정우',
    rating: 1,
    imageSrc: '/path-to-image/user5.jpg',
  },
]

const FifthPage = () => {
  const infiniteReviews = [...reviews, ...reviews, ...reviews] // 무한 슬라이드를 위한 배열 복제

  return (
    <div
      className="relative h-full w-full"
      style={{
        height: '900px', // 고정된 높이 설정
      }}
    >
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          filter: 'blur(6px) brightness(1.2)', // 흐림 효과 및 밝기 조정
        }}
      >
        <Image
          src={MainCard}
          alt="Background"
          layout="fill"
          objectFit="contain" // 컨테이너 안에 맞춤
          priority // 페이지 첫 로드 시 우선 로드
        />
      </div>

      {/* 불투명한 배경 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }}
      ></div>

      {/* 텍스트 */}
      <div
        className="absolute left-[10%] z-10 text-left"
        style={{
          top: '140px',
        }}
      >
        <div
          className="rounded-full font-medium text-blue-primary"
          style={{
            fontSize: '14px',
            padding: '10px 16px',
            marginBottom: '8px',
          }}
        >
          서비스 후기
        </div>
        <h2
          className="font-bold text-blue-primary"
          style={{
            fontSize: '32px',
            marginBottom: '32px',
          }}
        >
          MEMBER'S TALK
        </h2>
      </div>

      {/* 리뷰 슬라이드 */}
      <div
        className="relative z-10 flex h-full w-full items-center justify-center"
        style={{
          overflow: 'hidden',
        }}
      >
        <div
          className="flex"
          style={{
            display: 'flex',
            animation: `infiniteSlide ${reviews.length * 4}s linear infinite`,
            gap: '16px',
          }}
        >
          {infiniteReviews.map((review, index) => (
            <ReviewCard
              key={index}
              review={review.review}
              name={review.name}
              rating={review.rating}
              imageSrc={review.imageSrc}
            />
          ))}
        </div>
      </div>

      {/* 슬라이드 애니메이션 */}
      <style jsx>{`
        @keyframes infiniteSlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${reviews.length * 366}px);
          }
        }
      `}</style>
    </div>
  )
}

export default FifthPage
