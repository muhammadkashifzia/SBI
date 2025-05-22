const NewOpenCardSkeleton = () => {
  return (
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
  );
};

export default NewOpenCardSkeleton;
