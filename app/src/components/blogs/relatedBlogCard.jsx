export default function Card({ imageUrl, title, hashtag, date }) {
  return (
    <div className="w-full bg-white  overflow-hidden border border-[#D5D5D5]">
      <img
        src={imageUrl}
        alt="Card Image"
        className="w-full h-[110px] md:h-[200px] object-cover object-top"
      />
      <div className="py-[20px] px-[12px]">
        <p className="font-medium text-[#1E1C1C] text-[14px] break-words line-clamp-2">
          {title}
        </p>
        <p className="text-[#B900B3] font-medium mt-[24px] text-[13px]">
          #{hashtag}
        </p>
        <p className="text-[#C7C7C7] font-medium mt-[24px] text-[12px]">
          {date}
        </p>
      </div>
    </div>
  );
}
