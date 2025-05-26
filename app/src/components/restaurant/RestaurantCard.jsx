import Image from "next/image";
const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden">
      <div className="relative mb-[15px]">
      <Image className="w-full h-[248px] object-cover object-top" src={restaurant.image} alt={restaurant.name} width={200} height={200}/>
       <span className="inline-flex gap-[10px] text-white bg-[#9F8C5B] text-sm px-2 py-[11px] rounded-full absolute bottom-[11px] left-[12px] h-[42px] text-[16px] font-bold w-[120px] justify-center items-center">
          <Image src='/assets/svg/location-icon.svg' width={14} height={20} alt="locationIcon"/> {restaurant.area}
        </span>
        </div>
      <div className="">
        <div className="font-extrabold text-[22px] mb-[14px] text-[#2C3237]">{restaurant.name}</div>
        <p className="text-gray-700 text-base">{restaurant.rating}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
