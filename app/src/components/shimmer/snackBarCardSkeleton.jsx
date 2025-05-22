const SnackBarCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg  transition-transform duration-300 hover:scale-[1.02] flex gap-[10px] border-b-1 border-[#E9E9E9] pb-[16px] animate-pulse">
      <div className="bg-gray-300 w-20 h-20 rounded-md relative">
        <div className="absolute bg-gray-200 w-[20px] h-[20px] rounded-full top-[-5px] left-[-5px]" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-gray-300 h-5 w-32 rounded" />
        <div className="bg-gray-200 h-4 w-24 rounded" />
      </div>
    </div>
  );
};

export default SnackBarCardSkeleton;
