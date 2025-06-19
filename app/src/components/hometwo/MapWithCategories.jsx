'use client';
import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
// Complete prefecture data for all regions
const prefectureData = {
  // Hokkaido
  北海道: {
    name: '北海道',
    cities: ['札幌市', '函館市', '旭川市', '帯広市', '釧路市', '苫小牧市', '小樽市', '北見市', '江別市', '千歳市'],
  },
  
  // Tohoku
  青森: {
    name: '青森',
    cities: ['青森市', '弘前市', '八戸市', 'つがる市', '五所川原市', '十和田市', 'むつ市', '平川市'],
  },
  岩手: {
    name: '岩手',
    cities: ['盛岡市', '花巻市', '北上市', '久慈市', '遠野市', '一関市', '陸前高田市', '釜石市'],
  },
  宮城: {
    name: '宮城',
    cities: ['仙台市', '石巻市', '塩竈市', '気仙沼市', '白石市', '名取市', '角田市', '多賀城市'],
  },
  秋田: {
    name: '秋田',
    cities: ['秋田市', '能代市', '横手市', '大館市', '男鹿市', '湯沢市', '鹿角市', '由利本荘市'],
  },
  山形: {
    name: '山形',
    cities: ['山形市', '米沢市', '鶴岡市', '酒田市', '新庄市', '寒河江市', '上山市', '村山市'],
  },
  福島: {
    name: '福島',
    cities: ['福島市', 'いわき市', '郡山市', '会津若松市', '白河市', '須賀川市', '喜多方市', '相馬市'],
  },

  // Kanto
  東京: {
    name: '東京',
    cities: ['新宿区', '渋谷区', '港区', '千代田区', '中央区', '品川区', '目黒区', '大田区', '世田谷区', '杉並区'],
  },
  神奈川: {
    name: '神奈川',
    cities: ['横浜市', '川崎市', '相模原市', '横須賀市', '平塚市', '鎌倉市', '藤沢市', '小田原市'],
  },
  千葉: {
    name: '千葉',
    cities: ['千葉市', '船橋市', '松戸市', '市川市', '柏市', '市原市', '八千代市', '流山市'],
  },
  埼玉: {
    name: '埼玉',
    cities: ['さいたま市', '川越市', '熊谷市', '川口市', '所沢市', '春日部市', '狭山市', '上尾市'],
  },
  茨城: {
    name: '茨城',
    cities: ['水戸市', 'つくば市', '日立市', '土浦市', '古河市', '石岡市', '結城市', '龍ケ崎市'],
  },
  栃木: {
    name: '栃木',
    cities: ['宇都宮市', '足利市', '栃木市', '佐野市', '鹿沼市', '日光市', '小山市', '真岡市'],
  },
  群馬: {
    name: '群馬',
    cities: ['前橋市', '高崎市', '桐生市', '伊勢崎市', '太田市', '沼田市', '館林市', '渋川市'],
  },

  // Chubu
  新潟: {
    name: '新潟',
    cities: ['新潟市', '長岡市', '三条市', '柏崎市', '新発田市', '小千谷市', '加茂市', '十日町市'],
  },
  富山: {
    name: '富山',
    cities: ['富山市', '高岡市', '魚津市', '氷見市', '滑川市', '黒部市', '砺波市', '小矢部市'],
  },
  石川: {
    name: '石川',
    cities: ['金沢市', '七尾市', '小松市', '輪島市', '珠洲市', '加賀市', '羽咋市', 'かほく市'],
  },
  福井: {
    name: '福井',
    cities: ['福井市', '敦賀市', '小浜市', '大野市', '勝山市', '鯖江市', 'あわら市', '越前市'],
  },
  山梨: {
    name: '山梨',
    cities: ['甲府市', '富士吉田市', '都留市', '山梨市', '大月市', '韮崎市', '南アルプス市', '北杜市'],
  },
  長野: {
    name: '長野',
    cities: ['長野市', '松本市', '上田市', '岡谷市', '飯田市', '諏訪市', '須坂市', '小諸市'],
  },
  岐阜: {
    name: '岐阜',
    cities: ['岐阜市', '大垣市', '高山市', '多治見市', '関市', '中津川市', '美濃市', '瑞浪市'],
  },
  静岡: {
    name: '静岡',
    cities: ['静岡市', '浜松市', '沼津市', '熱海市', '三島市', '富士宮市', '伊東市', '島田市'],
  },
  愛知: {
    name: '愛知',
    cities: ['名古屋市', '豊橋市', '岡崎市', '一宮市', '瀬戸市', '半田市', '春日井市', '豊川市'],
  },

  // Kinki
  三重: {
    name: '三重',
    cities: ['津市', '四日市市', '伊勢市', '松阪市', '桑名市', '鈴鹿市', '名張市', '尾鷲市'],
  },
  滋賀: {
    name: '滋賀',
    cities: ['大津市', '彦根市', '長浜市', '近江八幡市', '草津市', '守山市', '栗東市', '甲賀市'],
  },
  京都: {
    name: '京都',
    cities: ['京都市', '福知山市', '舞鶴市', '綾部市', '宇治市', '宮津市', '亀岡市', '城陽市'],
  },
  大阪: {
    name: '大阪',
    cities: ['大阪市', '堺市', '岸和田市', '豊中市', '池田市', '吹田市', '泉大津市', '高槻市'],
  },
  兵庫: {
    name: '兵庫',
    cities: ['神戸市', '姫路市', '尼崎市', '明石市', '西宮市', '洲本市', '芦屋市', '伊丹市'],
  },
  奈良: {
    name: '奈良',
    cities: ['奈良市', '大和高田市', '大和郡山市', '天理市', '橿原市', '桜井市', '五條市', '御所市'],
  },
  和歌山: {
    name: '和歌山',
    cities: ['和歌山市', '海南市', '橋本市', '有田市', '御坊市', '田辺市', '新宮市', '紀の川市'],
  },

  // Chugoku
  鳥取: {
    name: '鳥取',
    cities: ['鳥取市', '米子市', '倉吉市', '境港市'],
  },
  島根: {
    name: '島根',
    cities: ['松江市', '浜田市', '出雲市', '益田市', '大田市', '安来市', '江津市', '雲南市'],
  },
  岡山: {
    name: '岡山',
    cities: ['岡山市', '倉敷市', '津山市', '玉野市', '笠岡市', '井原市', '総社市', '高梁市'],
  },
  広島: {
    name: '広島',
    cities: ['広島市', '呉市', '竹原市', '三原市', '尾道市', '福山市', '府中市', '三次市'],
  },
  山口: {
    name: '山口',
    cities: ['下関市', '宇部市', '山口市', '萩市', '防府市', '下松市', '岩国市', '光市'],
  },

  // Shikoku
  愛媛: {
    name: '愛媛',
    cities: ['松山市', '今治市', '宇和島市', '八幡浜市', '新居浜市', '西条市', '大洲市', '伊予市'],
  },
  香川: {
    name: '香川',
    cities: ['高松市', '丸亀市', '坂出市', '善通寺市', '観音寺市', 'さぬき市', '東かがわ市', '三豊市'],
  },
  高知: {
    name: '高知',
    cities: ['高知市', '室戸市', '安芸市', '南国市', '土佐市', '須崎市', '宿毛市', '土佐清水市'],
  },
  徳島: {
    name: '徳島',
    cities: ['徳島市', '鳴門市', '小松島市', '阿南市', '吉野川市', '阿波市', '美馬市', '三好市'],
  },

  // Kyushu & Okinawa
  福岡: {
    name: '福岡',
    cities: ['北九州市', '福岡市', '大牟田市', '久留米市', '直方市', '飯塚市', '田川市', '柳川市'],
  },
  佐賀: {
    name: '佐賀',
    cities: ['佐賀市', '唐津市', '鳥栖市', '多久市', '伊万里市', '武雄市', '鹿島市', '小城市'],
  },
  長崎: {
    name: '長崎',
    cities: ['長崎市', '佐世保市', '島原市', '諫早市', '大村市', '平戸市', '松浦市', '対馬市'],
  },
  熊本: {
    name: '熊本',
    cities: ['熊本市', '八代市', '人吉市', '荒尾市', '水俣市', '玉名市', '山鹿市', '菊池市'],
  },
  大分: {
    name: '大分',
    cities: ['大分市', '別府市', '中津市', '日田市', '佐伯市', '臼杵市', '津久見市', '竹田市'],
  },
  宮崎: {
    name: '宮崎',
    cities: ['宮崎市', '都城市', '延岡市', '日南市', '小林市', '日向市', '串間市', '西都市'],
  },
  鹿児島: {
    name: '鹿児島',
    cities: ['鹿児島市', '鹿屋市', '枕崎市', '阿久根市', '出水市', '指宿市', '西之表市', '垂水市'],
  },
  沖縄: {
    name: '沖縄',
    cities: ['那覇市', '宜野湾市', '石垣市', '浦添市', '名護市', '糸満市', '沖縄市', '豊見城市'],
  },
};

// Region mapping for styling and organization
const regionInfo = {
  北海道: { color: 'bg-[#78ADD4]', prefectures: ['北海道'] },
  東北: { color: 'bg-[#BADEE4]', prefectures: ['青森', '岩手', '宮城', '秋田', '山形', '福島'] },
  関東: { color: 'bg-yellow-500', prefectures: ['東京', '神奈川', '千葉', '埼玉', '茨城', '栃木', '群馬'] },
  中部: { color: 'bg-[#AAD170]', prefectures: ['新潟', '富山', '石川', '福井', '山梨', '長野', '岐阜', '静岡', '愛知'] },
  近畿: { color: 'bg-[#68BC8E]', prefectures: ['三重', '滋賀', '京都', '大阪', '兵庫', '奈良', '和歌山'] },
  中国: { color: 'bg-[#F0C996]', prefectures: ['鳥取', '島根', '岡山', '広島', '山口'] },
  四国: { color: 'bg-[#F2925C]', prefectures: ['愛媛', '香川', '高知', '徳島'] },
  九州沖縄: { color: 'bg-[#E88B99]', prefectures: ['福岡', '佐賀', '長崎', '熊本', '大分', '宮崎', '鹿児島', '沖縄'] },
};

export default function MapWithCategories() {
  const [selectedPrefecture, setSelectedPrefecture] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);

  const handlePrefectureClick = (prefecture) => {
    const prefData = prefectureData[prefecture];
    if (prefData) {
      setSelectedPrefecture(prefData.name);
      setIsModalOpen(true);
      setSelectedCities([]);
    }
  };

  const handleCityToggle = (city) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city],
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPrefecture(null);
    setSelectedCities([]);
  };

  const handleSearch = () => {
    console.log('Selected prefecture:', selectedPrefecture);
    console.log('Selected cities:', selectedCities);
    closeModal();
  };

  return (
    <div>
      <h2 className="font-bold text-[32px] leading-normal mb-[20px]">
        地図検索
      </h2>
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

        {/* Hokkaido Region */}
        <div className="absolute top-[5%] right-[5%] md:right-[15%] transform -translate-x-[-15%] md:-translate-x-[-10%] h-[fit-content] w-[100px] md:w-[173px]">
          <div className="text-center bg-white text-[#2C3237] rounded-lg shadow-lg">
            <h3 className="text-[12px] md:text-[16px] font-semibold text-white bg-[#78ADD4] py-[8.5px] rounded-t-[5px]">
              北海道
            </h3>
            <ul className="text-[12px] md:text-sm py-[15px] flex flex-wrap justify-center gap-[5px] md:gap-[15px] px-[5px] md:px-[30px]">
              <li 
                className="cursor-pointer hover:text-blue-600"
                onClick={() => handlePrefectureClick('北海道')}
              >
                北海道
              </li>
            </ul>
          </div>
        </div>

        {/* Chubu Region */}
        <div className="absolute top-[10%] left-[50%] transform translate-x-[-70%] right-0 h-[fit-content] w-[71px] md:w-[173px]">
          <div className="text-center bg-white text-[#2C3237] rounded-lg shadow-lg">
            <h3 className="text-[10px] md:text-[16px] font-semibold text-white bg-[#AAD170] py-[4.5px] md:py-[8.5px] rounded-t-[5px]">
              中部
            </h3>
            <ul className="text-[10px] md:text-sm py-[15px] flex flex-wrap justify-center gap-y-[15px] px-[5px] md:px-[15px]">
              {regionInfo.中部.prefectures.map((prefecture, index) => (
                <li
                  key={prefecture}
                  className={`w-[44%] ${index % 2 === 1 ? 'border-l border-[#C0C0C0] pl-[5px]' : 'pr-[5px]'} cursor-pointer hover:text-blue-600`}
                  onClick={() => handlePrefectureClick(prefecture)}
                >
                  {prefecture}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tohoku Region */}
        <div className="absolute bottom-[40%] md:bottom-[49%] -right-9 md:right-[15%] transform translate-x-[-30%] h-[fit-content]">
          <div className="text-center bg-white text-[#2C3237] rounded-lg shadow-lg max-w-[100px] md:max-w-[173px]">
            <h3 className="text-[12px] md:text-[16px] font-semibold text-white bg-[#BADEE4] rounded-t-[5px] py-[4.5px] md:py-[8.5px]">
              東北
            </h3>
            <ul className="text-[10px] md:text-sm py-[15px] flex flex-wrap justify-center gap-[15px] px-[5px] md:px-[30px]">
              {regionInfo.東北.prefectures.map((prefecture, index) => (
                <li 
                  key={prefecture}
                  className={`cursor-pointer hover:text-blue-600 ${index % 2 === 1 ? 'w-[45%] border-l border-[#C0C0C0]' : ''}`}
                  onClick={() => handlePrefectureClick(prefecture)}
                >
                  {prefecture}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kanto Region */}
        <div className="absolute top-[25%] right-[5%] md:right-[25%] transform translate-x-[-30%] h-[fit-content] w-[71px] md:w-[173px]">
          <div className="text-center bg-white text-[#2C3237] rounded-lg shadow-lg">
            <h3 className="text-[10px] md:text-[16px] font-semibold text-white bg-[#68BC8E] py-[4.5px] md:py-[8.5px] rounded-t-[5px]">
              関東
            </h3>
            <ul className="text-[10px] md:text-sm py-[15px] flex flex-wrap justify-center gap-y-[15px] px-[5px] md:px-[15px]">
              {regionInfo.関東.prefectures.map((prefecture, index) => (
                <li
                  key={prefecture}
                  className={`w-[44%] ${index % 2 === 1 ? 'border-l border-[#C0C0C0] pl-[5px]' : 'pr-[5px]'} cursor-pointer hover:text-blue-600`}
                  onClick={() => handlePrefectureClick(prefecture)}
                >
                  {prefecture}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Chugoku Region */}
        <div className="absolute top-[42%] md:top-[52%] left-[25%] md:left-[35%] transform translate-x-[-50%] -translate-y-[50%] h-[fit-content] w-[71px] md:w-[173px]">
          <div className="text-center bg-white text-[#2C3237] rounded-lg shadow-lg">
            <h3 className="text-[10px] md:text-[16px] font-semibold text-white bg-[#F0C996] rounded-t-[5px] py-[4.5px] md:py-[8.5px]">
              中国
            </h3>
            <ul className="text-[10px] md:text-sm py-[15px] flex flex-wrap justify-center gap-y-[15px] px-[5px] md:px-[15px]">
              {regionInfo.中国.prefectures.map((prefecture, index) => (
                <li 
                  key={prefecture}
                  className={`w-[44%] ${index % 2 === 1 ? 'border-l border-[#C0C0C0] pl-[5px]' : 'pr-[5px]'} cursor-pointer hover:text-blue-600`}
                  onClick={() => handlePrefectureClick(prefecture)}
                >
                  {prefecture}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kinki Region */}
        <div className="absolute bottom-[5%] right-0 md:right-[33%] transform translate-x-[-30%] h-[fit-content] w-[71px] md:w-[173px]">
          <div className="text-center bg-white text-[#2C3237] rounded-lg shadow-lg">
            <h3 className="text-[10px] md:text-[16px] font-semibold text-white bg-[#D1DFA1] rounded-t-[5px] py-[4.5px] md:py-[8.5px]">
              近畿
            </h3>
            <ul className="text-[10px] md:text-sm py-[15px] flex flex-wrap justify-center px-[5px] md:px-[30px] gap-y-[15px]">
              {regionInfo.近畿.prefectures.map((prefecture, index) => (
                <li 
                  key={prefecture}
                  className={`w-[45%] cursor-pointer hover:text-blue-600 ${index % 2 === 1 ? 'border-l border-[#C0C0C0]' : ''}`}
                  onClick={() => handlePrefectureClick(prefecture)}
                >
                  {prefecture}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Shikoku Region */}
        <div className="absolute bottom-[10%] md:bottom-[5%] left-[30%] md:left-[36%] transform translate-x-[-30%] h-[fit-content] w-[71px] md:w-[173px]">
          <div className="text-center bg-white text-[#2C3237] rounded-lg shadow-lg">
            <h3 className="text-[10px] md:text-[16px] font-semibold text-white bg-[#F2925C] rounded-t-[5px] py-[4.5px] md:py-[8.5px]">
              四国
            </h3>
            <ul className="text-[12px] md:text-sm py-[15px] flex flex-wrap justify-center gap-[5px] md:gap-[15px] px-[0px] md:px-[30px]">
              {regionInfo.四国.prefectures.map((prefecture, index) => (
                <li 
                  key={prefecture}
                  className={`cursor-pointer hover:text-blue-600 ${index % 2 === 1 ? 'w-[45%] border-l border-[#C0C0C0]' : ''}`}
                  onClick={() => handlePrefectureClick(prefecture)}
                >
                  {prefecture}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kyushu & Okinawa Region */}
        <div className="absolute bottom-[0%] md:bottom-[15%] left-[25px] md:left-[11%] transform translate-x-[-30%] right-0 h-[fit-content] w-[71px] md:w-[173px]">
          <div className="text-center bg-white text-[#2C3237] rounded-lg shadow-lg max-w-[100px] md:max-w-[173px]">
            <h3 className="text-[10px] md:text-[16px] font-semibold text-white bg-[#E88B99] rounded-t-[5px] py-[4.5px] md:py-[8.5px]">
              九州・沖縄
            </h3>
            <ul className="text-[10px] md:text-sm py-[5px] md:py-[15px] grid grid-cols-2 gap-y-[15px] px-[5px] md:px-[10px] text-center">
              {regionInfo.九州沖縄.prefectures.map((prefecture, index) => (
                <li 
                  key={prefecture}
                  className={`cursor-pointer hover:text-blue-600 ${index % 2 === 1 ? 'border-l border-[#C0C0C0] pl-[10px]' : ''}`}
                  onClick={() => handlePrefectureClick(prefecture)}
                >
                  {prefecture}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Dynamic Modal */}
      {isModalOpen && selectedPrefecture && (
        <div className="fixed inset-0 bg-[#00000099] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-[572px] w-full max-h-[80vh] overflow-y-auto pl-[15px] pr-[6px] py-[15px] relative mx-4">
            <div>
              <div>
                <h2 className="text-[20px] font-bold text-[#212121] leading-[24px]">
                  Area / Cities of Prefecture
                </h2>
                <div className="flex items-center text-sm bg-[#F6F6F6] mt-[23px] w-full p-[10px] mb-[8px]">
                  <span className="text-[#006BA6] text-[16px] font-medium">
                    Selected prefecture
                  </span>
                  <span className="mx-2">-</span>
                  <span className="text-[#2C3237] text-[16px] font-medium">
                    {selectedPrefecture} (
                    {prefectureData[selectedPrefecture]?.cities.length || 0})
                  </span>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="hover:bg-gray-100 absolute top-2 right-2 p-1 rounded-full focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <h3 className="text-sm font-medium text-[#070707] mb-[15px] border border-[#E6E6E6] rounded-[4px] py-[12.5px] px-[10px]">
              エリアの検索
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[20px] gap-x-[10px]">
              {prefectureData[selectedPrefecture]?.cities.map((city, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="rounded-[4px] border-[#808080] text-[#006BA6] focus:ring-blue-500 w-[20px] h-[20px] shrink-0"
                    checked={selectedCities.includes(city)}
                    onChange={() => handleCityToggle(city)}
                  />
                  <span className="text-sm text-[#006BA6] border border-[#CBCBCB] rounded-[3px] py-[5.5px] px-[10px] flex-1 text-center w-full max-w-[94px]">
                    {city}
                  </span>
                </label>
              ))}
            </div>
            <div className="mt-[23px]">
              <button
                onClick={handleSearch}
                className="w-full bg-[#006BA6] text-white py-2 px-4 rounded-[4px] cursor-pointer hover:bg-[#005A94] transition-colors"
                disabled={selectedCities.length === 0}
              >
                Search 
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}