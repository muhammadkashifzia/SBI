export default function RegisterBannerComponent() {
  return (
    <div className="relative z-10 flex items-center justify-between gap-y-[40px] md:gap-y-[0px] h-full pl-[37px] md:pl-[64px] pr-[37px] md:pr-[60px] flex-col md:flex-row">
        <div className="text-white">
          <h3 className="text-[30px] leading-[38px] font-bold mb-[10px]">無料で店舗登録</h3>
          <p className="text-[16px] font-normal leading-[24px]">最短３分</p>
        </div>

     <div>
         <button className="mb-[10px] bg-white text-blue-900 font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition">
        店舗を掲載して集客スタート
        </button>
        <p className='text-white text-center'>即日反映されます</p>
     </div>
      </div>
  );
}
