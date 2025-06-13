import Image from 'next/image';

const regions = [
  {
    name: '北海道',
    cities: ['札幌市', '函館市', '旭川市', '帯広市'],
    color: 'bg-blue-500',
  },
  {
    name: '東北',
    cities: ['青森', '岩手', '宮城', '秋田', '山形', '福島'],
    color: 'bg-green-500',
  },
  {
    name: '関東',
    cities: ['東京', '神奈川', '千葉', '埼玉', '茨城'],
    color: 'bg-yellow-500',
  },
  {
    central: '中部',
    cities: ['新潟', '富山', '石川', '福井', '山梨', '長野'],
    color: 'bg-red-500',
  },
  {
    name: '近畿',
    cities: ['大阪', '京都', '兵庫', '奈良', '和歌山', '滋賀'],
    color: 'bg-orange-500',
  },
  {
    name: '中国',
    cities: ['鳥取', '島根', '岡山', '広島', '山口'],
    color: 'bg-purple-500',
  },
  {
    name: '四国',
    cities: ['徳島', '香川', '愛媛', '高知'],
    color: 'bg-teal-500',
  },
  {
    name: '九州・沖縄',
    cities: ['福岡', '佐賀', '長崎', '熊本', '大分', '宮崎', '鹿児島', '沖縄'],
    color: 'bg-pink-500',
  },
];

export default function MapWithCategories() {
  return (
       <div>
          <h2 className='font-bold text-[32px] leading-normal mb-[20px]'>地図検索</h2>
    <div className="relative pt-[57px] pb-[108px] pl-[15px] pr-[35px] md:h-[906px] bg-[#f7f7f7]">
    
      {/* Map image */}
      <div className="block text-center">
  
         <Image
          src="/assets/svg/map-cut-area.svg"
          alt="Japan Map"
          width={166}
          height={188}
          className="w-full h-[118px] max-w-[166px] mx-auto object-fill hidden md:block absolute left-[83px] top-[125px]"
        />
        <Image
          src="/assets/svg/desktopmap.svg"
          alt="Japan Map"
          width={900}
          height={600}
          className="w-full h-full max-w-[737px] mx-auto object-fill hidden md:block"
        />
        <Image
          src="/assets/svg/mbl-map.svg"
          alt="Japan Map"
          width={900}
          height={600}
          className="w-full object-fill block md:hidden h-[322px]"
        />
      </div>

      {/* Region categories */}
         <div className="absolute top-[5%] right-[5%] md:right-[15%] transform -translate-x-[-15%] md:-translate-x-[-10%] h-[fit-content] w-[100px] md:w-[173px]">
        <div
          className={`text-center bg-white text-[#2C3237] rounded-lg shadow-lg `}
        >
          <h3 className="text-[12px] md:text-[16px] font-semibold text-white bg-[#78ADD4] py-[8.5px]  rounded-t-[5px]">
            北海道
          </h3>
          <ul className="text-[12px] md:text-sm py-[15px] flex flex-wrap justify-center gap-[5px] md:gap-[15px] px-[5px] md:px-[30px]">
            <li>北海道</li>
           
          </ul>
        </div>
      </div>
      <div className="absolute top-[10%] left-[50%] transform translate-x-[-70%] right-0  h-[fit-content] w-[71px] md:w-[173px]">
        <div
          className={`text-center bg-white text-[#2C3237] rounded-lg shadow-lg`}
        >
          <h3 className="text-[10px] md:text-[16px] font-semibold text-white bg-[#AAD170] py-[4.5px] md:py-[8.5px]  rounded-t-[5px]">
            中部
          </h3>
          <ul className="text-[10px] md:text-sm py-[15px] flex flex-wrap  justify-center gap-y-[15px]  px-[5px] md:px-[15px]">
       
            <li className='w-[44%] pr-[5px]'>新潟</li>
            <li className='w-[44%] border-l border-[#C0C0C0] pl-[5px]'>富山</li>
            <li className='w-[44%] pr-[5px]'>石川</li>
            <li className='w-[44%] border-l border-[#C0C0C0] pl-[5px]'>福井</li>
            <li className='w-[44%] pr-[5px]'>山梨</li>
             <li className='w-[44%] border-l border-[#C0C0C0] pl-[5px]'>長野</li>
              <li className='w-[44%] pr-[5px]'>岐阜</li>
       <li className='w-[44%] border-l border-[#C0C0C0] pl-[5px]'>静岡</li>
          <li className='w-[44%]'>愛知</li>
          </ul>
        </div>
      </div>

      <div className="absolute top-[42%] md:top-[52%]  left-[25%] md:left-[35%] transform translate-x-[-50%]  -translate-y-[50%]  h-[fit-content] w-[71px] md:w-[173px]">
        <div
          className={`text-center bg-white text-[#2C3237] rounded-lg shadow-lg`}
        >
          <h3 className="text-[10px] md:text-[16px] font-semibold text-white bg-[#F0C996] rounded-t-[5px] py-[4.5px] md:py-[8.5px] ">
            中国
          </h3>
          <ul className="text-[10px] md:text-sm py-[15px] flex flex-wrap  justify-center gap-y-[15px]  px-[5px] md:px-[15px]">
            <li className='w-[44%] pr-[5px]'>鳥取</li>
            <li className='w-[44%] border-l border-[#C0C0C0] pl-[5px]'>島根</li>
            <li className='w-[44%] pr-[5px]'>岡山</li>
            <li className='w-[44%] border-l border-[#C0C0C0] pl-[5px]'>広島</li>
            <li className='w-[44%]'>山口</li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-[0%] md:bottom-[15%] left-[25px] md:left-[11%] transform translate-x-[-30%] right-0  h-[fit-content] w-[71px] md:w-[max-content]">
        <div
          className={`text-center bg-white text-[#2C3237] rounded-lg shadow-lg max-w-[100px] md:max-w-[173px]`}
        >
          <h3 className="text-[10px] md:text-[16px] font-semibold text-white bg-[#E88B99] rounded-t-[5px] py-[4.5px] md:py-[8.5px] ">
            九州・沖縄
          </h3>
          <ul className="text-[10px] md:text-sm py-[5px] md:py-[15px] grid grid-cols-2 gap-y-[15px]   px-[5px] md:px-[30px] text-center">
            <li>福岡</li>
           <li className='border-l border-[#C0C0C0] pl-[10px]'>大分</li>
            <li>佐賀</li>
            <li className='border-l border-[#C0C0C0] pl-[10px]'>宮崎</li>
            <li>長崎</li>
            <li className='border-l border-[#C0C0C0] pl-[10px]'>鹿児島</li>
            <li>熊本</li>
            <li className='border-l border-[#C0C0C0] pl-[10px]'>沖縄</li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-[40%] md:bottom-[49%] -right-9 md:right-[15%] transform translate-x-[-30%]  h-[fit-content]">
        <div
          className={`text-center bg-white text-[#2C3237] rounded-lg shadow-lg max-w-[100px] md:max-w-[173px]`}
        >
          <h3 className="text-[12px] md:text-[16px] font-semibold text-white bg-[#BADEE4] rounded-t-[5px] py-[4.5px] md:py-[8.5px] ">
            東北
          </h3>
          <ul className="text-[10px] md:text-sm py-[15px] flex flex-wrap justify-center gap-[15px] px-[5px] md:px-[30px]">
            <li>青森</li>
            <li className='w-[45%] border-l border-[#C0C0C0]'>岩手</li>
            <li>宮城</li>
            <li className='w-[45%] border-l border-[#C0C0C0]'>山形</li>
            <li>福島</li>
            <li className='w-[45%] border-l border-[#C0C0C0]'>奈良</li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-[19%] right-0 md:right-[20%] transform translate-x-[-30%]  h-[fit-content] w-[71px] md:w-[173px]">
        <div
          className={`text-center bg-white text-[#2C3237] rounded-lg shadow-lg`}
        >
          <h3 className="text-[10px] md:text-[16px] font-semibold text-white bg-[#68BC8E] rounded-t-[5px] py-[4.5px] md:py-[8.5px] ">
            四国
          </h3>
          <ul className="text-[10px] md:text-sm py-[15px] flex flex-wrap justify-center px-[5px] md:px-[30px] gap-y-[5px]">
            <li className='w-[45%]'>三重</li>
            <li className='w-[45%] border-l border-[#C0C0C0]'>滋賀</li>
            <li className='w-[45%]'>京都</li>
            <li className='w-[45%] border-l border-[#C0C0C0]'>大阪</li>
            <li className='w-[45%]'>兵庫</li>
            <li className='w-[45%] border-l border-[#C0C0C0]'>奈良</li>
            <li className='w-[45%]'>和歌山</li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-[10%] md:bottom-[5%] left-[50%] md:left-[52%] transform translate-x-[-30%]  h-[fit-content] w-[71px] md:w-[173px]">
        <div
          className={`text-center bg-white text-[#2C3237] rounded-lg shadow-lg`}
        >
          <h3 className="text-[10px] md:text-[16px] font-semibold text-white bg-[#D1DFA1] rounded-t-[5px] py-[4.5px] md:py-[8.5px] ">
            四国
          </h3>
          <ul className="text-[10px] md:text-sm py-[10px] md:py-[15px] flex flex-wrap justify-center gap-[10px] px-[5px] md:px-[30px]">
            <li>三重</li>
            <li className='w-[45%] border-l border-[#C0C0C0]'>滋賀</li>
            <li>京都</li>
            <li className='w-[45%] border-l border-[#C0C0C0]'>大阪</li>
            <li>兵庫</li>
            <li className='w-[45%] border-l border-[#C0C0C0]'>奈良</li>
            <li>和歌山</li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-[10%] md:bottom-[5%] left-[30%] md:left-[36%] transform translate-x-[-30%]  h-[fit-content] w-[71px] md:w-[173px]">
        <div
          className={`text-center bg-white text-[#2C3237] rounded-lg shadow-lg`}
        >
          <h3 className="text-[10px] md:text-[16px] font-semibold text-white bg-[#F2925C] rounded-t-[5px] py-[4.5px] md:py-[8.5px]">
            四国
          </h3>
          <ul className="text-[12px] md:text-sm py-[15px] flex flex-wrap justify-center gap-[5px] md:gap-[15px] px-[0px] md:px-[30px]">
            <li>愛媛</li>
            <li className='w-[45%] border-l border-[#C0C0C0]'>香川</li>
            <li>高知</li>
            <li className='w-[45%] border-l border-[#C0C0C0]'>徳島</li>
          </ul>
        </div>
      </div>
    </div>
       </div>
  );
}
