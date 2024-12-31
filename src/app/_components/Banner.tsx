import Icon from './icon/Icon'

const Banner = () => {
  return (
    <div className="flex h-[200px] w-[1423px] items-center justify-center rounded-lg bg-blue-primary py-8 text-center text-white">
      <div className="h-[124px] w-[1375px] flex-row items-center justify-center">
        <Icon id="logo" width={150} height={66} />
        <div className="flex-col">
          <div >TOOK을 통해 고품질 스캔 파일을 이용해보세요!</div>
          <div>
            툭은 안전하고 편리한 스캔서비스를 제공합니다. 지금 스캔 신청하기를
            통해 빠르게 견적을 확인해보세요.
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner
