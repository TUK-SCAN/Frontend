import Banner from "@tookscan/components/ui/Banner/Banner"
import Icon from "@tookscan/components/ui/Icon/Icon";

const Price = () => {
    return (
        <div>
            <Banner type={3}/>
            <div className="bg-blue-secondary flex flex-col justify-center items-center min-h-screen">
                
                <div className="w-[1152px] flex flex-col justify-start items-start text-start">
            <h2 className="text-[18px] font-semibold text-blue-primary mb-4">가격안내</h2>
            <h1 className="text-[32px] font-bold text-gray-800 mb-6">스캔 상세안내</h1>
            </div>
            <div className="flex  flex-col justify-center items-center">
      <div className="bg-white w-[1152px] h-[812px] p-[50px] rounded-lg shadow-md">
        
        <div className="flex flex-col items-center mb-8"> 
        <div className="bg-black text-yellow-500 text-sm font-medium px-3 py-1 rounded-full flex items-center justify-center gap-2">
              
              <span> 🚨 업계 최저 가격 🚨 </span>
          
            </div>
          <h2 className="text-[32px] font-bold text-gray-800 mt-4 mb-[50px]">스캔 가격</h2>
          <p className="text-black text-[20px] mb-6">10원 / 1페이지</p>
          <div className="flex flex-col gap-4">
            <div className="bg-blue-secondary text-blue-primary w-[200px] h-[50px] px-4 py-2 rounded-[80px] flex justify-center items-center">
            <Icon id="600dpi " className="w-6 h-6 mr-1" />
              <span className="text-sm font-medium">  600 DPI</span>
            </div>
            <div className="bg-blue-secondary mb-[50px] text-blue-primary w-[200px] h-[50px] px-4 py-2 rounded-[80px] flex justify-center items-center">
            <Icon id="price " className="w-6 h-6 mr-1" />
              <span className="text-sm font-medium">  합리적인 가격 </span>
            </div>
          </div>
        </div>
       
        <table className="text-[18px] w-full border-collapse border border-gray-300 text-gray-700">
  <thead>
    <tr>
      <th className=" bg-blue-secondary border border-gray-300 px-4 py-2 text-blue-primary w-[204px] h-[56px] ">
        항목
      </th>
      <th className="border border-gray-300 px-4 py-2 w-[346px] h-[56px] rounded-tl-[0.5px]">
        상세 내용
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="bg-blue-secondary border border-gray-300 px-4 py-2 text-center text-blue-primary w-[204px] h-[56px]">
        품질
      </td>
      <td className="border border-gray-300 px-4 py-2 text-center w-[346px] h-[56px]">
        고해상도 컬러 스캔
      </td>
    </tr>
    <tr>
      <td className="bg-blue-secondary border border-gray-300 px-4 py-2 text-center text-blue-primary w-[204px] h-[56px]">
        DPI
      </td>
      <td className="border border-gray-300 px-4 py-2 text-center w-[346px] h-[56px]">
        최대 600 DPI
      </td>
    </tr>
    <tr>
      <td className="bg-blue-secondary border border-gray-300 px-4 py-2 text-center text-blue-primary w-[204px] h-[56px]">
        색감
      </td>
      <td className="border border-gray-300 px-4 py-2 text-center w-[346px] h-[56px]">
        24비트 컬러
      </td>
    </tr>
    <tr>
      <td className="bg-blue-secondary border border-gray-300 px-4 py-2 text-center text-blue-primary w-[204px] h-[56px]">
        선명도
      </td>
      <td className="border border-gray-300 px-4 py-2 text-center w-[346px] h-[56px]">
        자동 이미지 보정 및 선명한 텍스트 출력 지원
      </td>
    </tr>
    <tr>
      <td className="bg-blue-secondary border border-gray-300 px-4 py-2 text-center text-blue-primary w-[204px] h-[56px]">
        검수작업
      </td>
      <td className="border border-gray-300 px-4 py-2 text-center w-[346px] h-[56px]">
        빈 페이지 제거 및 배경틈 보정 기능
      </td>
    </tr>
    <tr>
      <td className="bg-blue-secondary border border-gray-300 px-4 py-2 text-center text-blue-primary w-[204px] h-[56px] rounded-bl-[0.5px]">
        기울기보정
      </td>
      <td className="border border-gray-300 px-4 py-2 text-center w-[346px] h-[56px] rounded-br-[0.5px]">
        자동 기울기 보정 및 잘못된 정렬 수정
      </td>
    </tr>
  </tbody>
</table>

      </div>
    </div>
        </div>
        </div>
    );
};
export default Price;