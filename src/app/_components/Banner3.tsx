import Icon from './icon/Icon'

const Banner3 = () => {
  return (
    <div className="flex h-[200px] w-[1423px] items-center justify-center rounded-lg border-0 bg-blue-primary p-8 text-white">
      {/* Wrapper for Icon and Text */}
      <div className="flex h-full w-[1135px] items-center justify-between px-6">
        {/* Logo Section */}

        {/* Text Section */}
        <div className="flex flex-col justify-center text-left">
          <p className="font-pretendard text-[32px] font-bold leading-[1.5]">
            신청하기
          </p>
          <p className="mt-2 font-pretendard text-[12px] leading-[1.5]">
            툭은 안전하고 편리한 스캔서비스를 제공합니다. <br />
            지금 스캔 신청하기를 통해 빠르게 견적을 확인해보세요.
          </p>
        </div>
        <div className="flex items-center">
          <Icon id="logo" width={150} height={66} />
        </div>
      </div>
    </div>
  )
}

export default Banner3
