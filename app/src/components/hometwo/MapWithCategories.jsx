import Image from 'next/image';
import mapImage from '../../../public/assets/svg/map.svg'; // Ensure the map image is in the public folder

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
    <div className="relative max-w-[1360px] mx-auto h-[906px]">
      {/* Map image */}
      <div className="flex justify-center mb-4">
        <Image
          src={mapImage}
          alt="Japan Map"
          width={900}
          height={600}
          className="w-[900px] h-[906px] object-fill"
        />
      </div>

      {/* Region categories */}
      <div className="absolute bottom-[50%] left-[70%] transform translate-x-[-70%] right-0  h-[fit-content]">
        <div
          className={`text-center bg-white text-[#2C3237] rounded-lg shadow-lg max-w-[100px] md:max-w-[173px]`}
        >
          <h3 className="text-[12px] md:text-[16px] font-semibold text-white bg-[#AAD170] py-[8.5px]  rounded-t-[5px]">
            中部
          </h3>
          <ul className="text-[12px] md:text-sm py-[15px] flex flex-wrap justify-center gap-[15px] px-[5px] md:px-[30px]">
            <li>新潟</li>
             <span>|</span>
            <li>富山</li>
            <li>福井</li>
             <span>|</span>
            <li>山梨</li>
            <li>長野</li>
             <span>|</span>
            <li>岐阜</li>
            <li>静岡</li>
             <span>|</span>
            <li>愛知</li>
          </ul>
        </div>
      </div>
      
      <div className="absolute bottom-[43%] md:bottom-[35%] left-[40%] md:left-[50%] transform translate-x-[-50%] right-0  h-[fit-content]">
        <div
          className={`text-center bg-white text-[#2C3237] rounded-lg shadow-lg max-w-[100px] md:max-w-[173px]`}
        >
          <h3 className="text-[12px] md:text-[16px] font-semibold text-white bg-[#F0C996] rounded-t-[5px] py-[8.5px] ">
            中国
          </h3>
          <ul className="text-[12px] md:text-sm py-[15px] flex flex-wrap justify-center gap-[15px] px-[5px] md:px-[30px]">
            <li>福岡</li>
             <span>|</span>
            <li>福岡</li>
            <li>福岡</li>
             <span>|</span>
            <li>福岡</li>
            <li>福岡</li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-[10%] md:bottom-[5%] left-[25%] md:left-[35%] transform translate-x-[-30%] right-0  h-[fit-content]">
        <div
          className={`text-center bg-white text-[#2C3237] rounded-lg shadow-lg max-w-[100px] md:max-w-[173px]`}
        >
          <h3 className="text-[12px] md:text-[16px] font-semibold text-white bg-[#E88B99] rounded-t-[5px] py-[8.5px] ">
            九州・沖縄
          </h3>
          <ul className="text-[12px] md:text-sm py-[15px] flex flex-wrap justify-center gap-[15px] px-[5px] md:px-[30px]">
            <li>福岡</li>
            <span>|</span>
            <li>大分</li>
            <li>佐賀</li>
            <span>|</span>
            <li>長崎</li>
            <li>鹿児島</li>
            <span>|</span>
            <li>熊本</li>
            <li>沖縄</li>
            <span>|</span>
            <li>沖縄</li>
          </ul>
        </div>
      </div>
       <div className="absolute bottom-[40%] md:bottom-[49%] -right-9 md:right-[10%] transform translate-x-[-30%]  h-[fit-content]">
        <div
          className={`text-center bg-white text-[#2C3237] rounded-lg shadow-lg max-w-[100px] md:max-w-[173px]`}
        >
          <h3 className="text-[12px] md:text-[16px] font-semibold text-white bg-[#BADEE4] rounded-t-[5px] py-[8.5px] ">
            東北
          </h3>
          <ul className="text-[12px] md:text-sm py-[15px] flex flex-wrap justify-center gap-[15px] px-[5px] md:px-[30px]">
            <li>青森</li>
            <span>|</span>
            <li>岩手</li>
            <li>宮城</li>
            <span>|</span>
            <li>山形</li>
            <li>福島</li>
            <span>|</span>
            <li>奈良</li>
       
          </ul>
        </div>
      </div>
      <div className="absolute bottom-[19%] right-0 md:right-[13%] transform translate-x-[-30%]  h-[fit-content]">
        <div
          className={`text-center bg-white text-[#2C3237] rounded-lg shadow-lg max-w-[100px] md:max-w-[173px]`}
        >
          <h3 className="text-[12px] md:text-[16px] font-semibold text-white bg-[#68BC8E] rounded-t-[5px] py-[8.5px] ">
            四国
          </h3>
          <ul className="text-[12px] md:text-sm py-[15px] flex flex-wrap justify-center gap-[15px] px-[5px] md:px-[30px]">
            <li>三重</li>
            <span>|</span>
            <li>滋賀</li>
            <li>京都</li>
            <span>|</span>
            <li>大阪</li>
            <li>兵庫</li>
            <span>|</span>
            <li>奈良</li>
            <li>和歌山</li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-[4%] right-[30%] md:right-[28%] transform translate-x-[-30%]  h-[fit-content]">
        <div
          className={`text-center bg-white text-[#2C3237] rounded-lg shadow-lg max-w-[100px] md:max-w-[173px]`}
        >
          <h3 className="text-[12px] md:text-[16px] font-semibold text-white bg-[#D1DFA1] rounded-t-[5px] py-[8.5px] ">
            四国
          </h3>
          <ul className="text-[12px] md:text-sm py-[15px] flex flex-wrap justify-center gap-[15px] px-[5px] md:px-[30px]">
            <li>三重</li>
            <span>|</span>
            <li>滋賀</li>
            <li>京都</li>
            <span>|</span>
            <li>大阪</li>
            <li>兵庫</li>
            <span>|</span>
            <li>奈良</li>
            <li>和歌山</li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-[0%] right-10 md:right-[44%] transform translate-x-[-30%]  h-[fit-content]">
        <div
          className={`text-center bg-white text-[#2C3237] rounded-lg shadow-lg max-w-[100px] md:max-w-[173px]`}
        >
          <h3 className="text-[12px] md:text-[16px] font-semibold text-white bg-[#F2925C] rounded-t-[5px] py-[8.5px] ">
            四国
          </h3>
          <ul className="text-[12px] md:text-sm py-[15px] flex flex-wrap justify-center gap-[5px] md:gap-[15px] px-[0px] md:px-[30px]">
            <li>愛媛</li>
             <span>|</span>
            <li>香川</li>
            <li>高知</li>
             <span>|</span>
            <li>徳島</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
