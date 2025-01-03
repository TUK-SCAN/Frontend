import { ReactNode } from 'react'

type BannerProps = {
  children?: ReactNode
}

const Banner = ({ children }: BannerProps) => {
  return (
    <div className="flex h-[200px] w-[1423px] items-center justify-center rounded-lg border-0 bg-blue-primary text-white">
      {children}
    </div>
  )
}

export default Banner
