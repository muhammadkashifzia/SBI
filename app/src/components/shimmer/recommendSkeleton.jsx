const RecommendSkeletonCard = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[200px] mx-auto text-center pt-3 text-[14px] text-[#1E1C1C] font-medium flex justify-center items-center gap-[15px] mb-[10px]">
        <span className="w-[1px] h-[20px] border border-[#1E1C1C] inline-block rotate-[145deg]"></span>
        <div className="flex items-center gap-[4px]">
          <span className="text-[#B900B3]">#</span>
          <p className="w-[94px] h-[16px] bg-gray-300 rounded-[5px] inline-block" />
        </div>
        <span className="w-[1px] h-[20px] border border-[#1E1C1C] inline-block rotate-[215deg]"></span>
      </div>
      <div className="bg-white rounded-[10px] shadow-[0px_5px_20px_0px_#0000000A] overflow-hidden w-full">
        <div className="w-full h-[139px] bg-gray-300 rounded-t-[12px]" />
        <div className="px-[12px] pb-[25px] pt-[12px]">
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-[12px]"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2 mb-[15px]"></div>
          <div className="flex gap-2">
            <div className="h-5 bg-gray-300 rounded w-[58px]"></div>
            <div className="h-5 bg-gray-300 rounded w-[58px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendSkeletonCard;
