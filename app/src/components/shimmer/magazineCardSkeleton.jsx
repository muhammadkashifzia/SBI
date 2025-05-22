const MagazineCardSkeleton = () => {
  return (
    <div className="rounded-xl pr-[16px] w-full relative h-[267px] animate-pulse ">
      <div className="w-full h-[267px] rounded-xl bg-gray-300" />
      <div className="py-[16px] px-[20px] bg-gray-200 rounded-[10px] absolute bottom-[16px] right-0 w-[96%] ml-auto h-[60px]" />
    </div>
  );
};

export default MagazineCardSkeleton;
