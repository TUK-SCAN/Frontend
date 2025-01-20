// components/PrivacyLayout.tsx
import Banner from '@tookscan/components/ui/Banner/Banner'
import { LayoutProps } from '../../../types/common'

const PrivacyLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Banner type={3}></Banner>
      <div className="bg-blue-secondary"></div>
      <div className="mb-4 text-lg font-semibold">약관을 확인해주세요</div>
      <div className="mb-6 flex gap-4">
        {[
          { label: '개인정보 수집목적 및 이용목적', link: './privacy1/page' },
          { label: '수집하는 개인정보 항목', link: './privacy2/page' },
          { label: '서비스 부정이용자 처리방안', link: './privacy3/page' },
          {
            label: '서비스 이용과정에서 수집되는 정보',
            link: './privacy4/page',
          },
          { label: '개인정보의 수집 방법', link: './privacy5/page' },
        ].map((item, index) => (
          <button
            key={index}
            className="max-w-[150px] truncate rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-medium"
            onClick={() => (window.location.href = item.link)}
            title={item.label} // 툴팁 제공
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="rounded-md bg-white p-6 shadow-md">{children}</div>
    </div>
  )
}

export default PrivacyLayout
