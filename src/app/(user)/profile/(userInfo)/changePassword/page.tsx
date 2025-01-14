const OrderHistory = () => {
  return (
    <div>
      <div className="flex flex-col pb-[12px]">
        <label className="mb-2 flex flex-row text-sm font-[18px]">
          비밀번호 <div className="ml-1 text-blue-primary">*</div>
        </label>
        <label className="mb-2 flex flex-row text-sm font-[12px] text-gray-400">
          안내 문구입니다.
        </label>
        <input
          type="text"
          id="name"
          className="h-[50px] w-[380px] rounded-md bg-blue-secondary px-[18px] py-[12px]"
          placeholder="기존비밀번호"
        />
        <label className="mb-2 mt-[12px] flex flex-row text-sm font-[12px] text-gray-400">
          (8~20자 영문 숫자 조합)
        </label>
        <input
          type="text"
          id="name"
          className="h-[50px] w-[380px] rounded-md bg-blue-secondary px-[18px] py-[12px]"
          placeholder="새 비밀번호"
        />
        <label className="mb-2 mt-[12px] flex flex-row text-sm font-[12px] text-gray-400">
          (8~20자 영문 숫자 조합)
        </label>
        <input
          type="text"
          id="name"
          className="h-[50px] w-[380px] rounded-md bg-blue-secondary px-[18px] py-[12px]"
          placeholder="새 비밀번호 확인"
        />
        <label className="mb-2 mt-[12px] flex flex-row text-sm font-[12px] text-gray-400">
          비밀번호를 한번 더 입력해주세요.
        </label>
      </div>

      <button
        type="button"
        className="mt-[100px] h-[60px] w-[500px] rounded-md bg-blue-500 px-[28px] py-[18px] text-white"
      >
        수정완료
      </button>
    </div>
  )
}

export default OrderHistory
