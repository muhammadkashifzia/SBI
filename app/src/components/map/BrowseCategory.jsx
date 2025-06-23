import Image from 'next/image';

export default function BrowseCategory() {
  return (
    <div className="mt-[100px]">
      <div className="text-left mb-[23px]">
        <h1 className="text-[32px] font-bold text-[#2C3237]">
          カテゴリーから探す
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[33px]">
        <div className="flex flex-col items-center relative">
          <Image
            src="/assets/images/browse-category01.png"
            alt="グルメ"
            width={200}
            height={200}
            className="rounded-[5px] w-full  h-[191px] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-[5px]"></div>
          <span className="text-[32px] font-medium absolute top-[50%] transform -translate-y-1/2 text-[#fff]  px-[43px] w-full text-center">
            グルメ
          </span>
        </div>
        <div className="flex flex-col items-center relative">
          <Image
            src="/assets/images/fashion-category.png"
            alt="グルメ1"
            width={200}
            height={200}
            className="rounded-[5px] w-full  h-[191px] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-[5px]"></div>
          <span className="text-[32px] font-medium absolute top-[50%] transform -translate-y-1/2 text-[#fff]  px-[5px] w-full text-center">
            ファッション
          </span>
        </div>
        <div className="flex flex-col items-center relative">
          <Image
            src="/assets/images/browse-category03.png"
            alt="グルメ1"
            width={200}
            height={200}
            className="rounded-[5px] w-full  h-[191px] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-[5px]"></div>
          <span className="text-[32px] font-medium absolute top-[50%] transform -translate-y-1/2 text-[#fff]  px-[26px] w-full text-center">
            グッズ
          </span>
        </div>
        <div className="flex flex-col items-center relative">
          <Image
            src="/assets/images/amusement.png"
            alt="グルメ1"
            width={200}
            height={200}
            className="rounded-[5px] w-full  h-[191px] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-[5px]"></div>
          <span className="text-[32px] font-medium absolute top-[50%] transform -translate-y-1/2 text-[#fff]  px-[26px] w-full text-center">
            アミューズ メント
          </span>
        </div>
        <div className="flex flex-col items-center relative">
          <Image
            src="/assets/images/service.png"
            alt="グルメ1"
            width={200}
            height={200}
            className="rounded-[5px] w-full  h-[191px] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-[5px]"></div>
          <span className="text-[32px] font-medium absolute top-[50%] transform -translate-y-1/2 text-[#fff]  px-[26px] w-full text-center">
            サービス
          </span>
        </div>
      </div>
      <div className="flex gap-x-[161px] gap-y-[10px] mt-[20px] items-start md:items-center flex-col md:flex-row">
        <div className='flex w-[85px] text-[20px] font-bold'>グルメ</div>
        <div className='flex items-center gap-[20px] flex-wrap'>
          <p className="border border-[#CBCBCB] rounded-[3px] px-[20px] text-[18px] font-medium text-[#006BA6] h-[33px] items-center justify-center flex py-[10px]">
            焼き肉
          </p>
           <p className="border border-[#CBCBCB] rounded-[3px] px-[20px] text-[18px] font-medium text-[#006BA6] h-[33px] items-center justify-center flex py-[10px]">
            カフェ
          </p>
           <p className="border border-[#CBCBCB] rounded-[3px] px-[20px] text-[18px] font-medium text-[#006BA6] h-[33px] items-center justify-center flex py-[10px]">
            焼き鳥   
          </p>
           <p className="border border-[#CBCBCB] rounded-[3px] px-[20px] text-[18px] font-medium text-[#006BA6] h-[33px] items-center justify-center flex py-[10px]">
            スイーツ 
          </p>
           <p className="border border-[#CBCBCB] rounded-[3px] px-[20px] text-[18px] font-medium text-[#006BA6] h-[33px] items-center justify-center flex py-[10px]">
            鍋
          </p>
            <p className="border border-[#CBCBCB] rounded-[3px] px-[20px] text-[18px] font-medium text-[#006BA6] h-[33px] items-center justify-center flex py-[10px]">
            ハンバーグ
          </p>
            <p className="border border-[#CBCBCB] rounded-[3px] px-[20px] text-[18px] font-medium text-[#006BA6] h-[33px] items-center justify-center flex py-[10px]">
           サラダ
          </p>
        </div>
      </div>
    </div>
  );
}
