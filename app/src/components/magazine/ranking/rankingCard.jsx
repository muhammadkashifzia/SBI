import Image from 'next/image';

import PropTypes from 'prop-types';

const RankingCard = ({ id, title, tags, imageUrl }) => {
  return (
    <div className="px-[16px] rounded-lg  transition-transform duration-300 hover:scale-[1.02] flex gap-[10px] pb-[8px]">
      <div className="relative w-[182px] h-[102px]">
        <Image
          src={imageUrl}
          alt="Magazine"
          fill
          className="object-cover w-[182px] rounded-[12px]"
        />
        <div className="absolute top-[-5px] left-[-5px] bg-[#B900B3] text-white text-[12px] font-[400] w-[20px] h-[20px] border border-[#ffffff] rounded-full flex items-center justify-center fugaz-one">
          {id}
        </div>
      </div>
      <div className="w-[60%] flex flex-col justify-center">
        <h3 className="text-[13px] font-normal text-[#1E1C1C] line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center mt-[16px] text-gray-600 gap-[4px]">
          <p className="text-[#B900B3] text-[12px] font-normal">{tags}</p>
        </div>
      </div>
    </div>
  );
};

RankingCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default RankingCard;