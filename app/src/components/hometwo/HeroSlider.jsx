'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const locationData = {
  北海道: {
    name: '北海道',
    areas: ['エリア1', 'エリア2', 'エリア3', 'エリア4'],
  },
  東北: {
    name: '東北',
    prefectures: {
      青森: ['青森市', '弘前市', '八戸市', '五所川原市'],
      岩手: ['盛岡市', '一関市', '奥州市', '花巻市'],
      宮城: ['仙台市', '石巻市', '大崎市', '登米市'],
      秋田: ['秋田市', '横手市', '大仙市', '由利本荘市'],
      山形: ['山形市', '鶴岡市', '酒田市', '米沢市'],
      福島: ['福島市', 'いわき市', '郡山市', '会津若松市'],
    },
  },
  関東: {
    name: '関東',
    prefectures: {
      茨城: ['水戸市', 'つくば市', '日立市', 'ひたちなか市'],
      栃木: ['宇都宮市', '小山市', '栃木市', '佐野市'],
      群馬: ['前橋市', '高崎市', '桐生市', '伊勢崎市'],
      埼玉: ['さいたま市', '川越市', '熊谷市', '川口市'],
      千葉: ['千葉市', '船橋市', '松戸市', '市川市'],
      東京: ['新宿区', '渋谷区', '港区', '千代田区'],
      神奈川: ['横浜市', '川崎市', '相模原市', '横須賀市'],
    },
  },
  中部: {
    name: '中部',
    prefectures: {
      新潟: ['新潟市', '長岡市', '上越市', '三条市'],
      富山: ['富山市', '高岡市', '魚津市', '氷見市'],
      石川: ['金沢市', '小松市', '輪島市', '珠洲市'],
      福井: ['福井市', '敦賀市', '小浜市', '大野市'],
      山梨: ['甲府市', '富士吉田市', '都留市', '山梨市'],
      長野: ['長野市', '松本市', '上田市', '岡谷市'],
      岐阜: ['岐阜市', '大垣市', '高山市', '多治見市'],
      静岡: ['静岡市', '浜松市', '沼津市', '熱海市'],
      愛知: ['名古屋市', '豊橋市', '岡崎市', '一宮市'],
    },
  },
  関西: {
    name: '関西',
    prefectures: {
      三重: ['津市', '四日市市', '伊勢市', '松阪市'],
      滋賀: ['大津市', '彦根市', '長浜市', '近江八幡市'],
      京都: ['京都市', '福知山市', '舞鶴市', '綾部市'],
      大阪: ['大阪市', '堺市', '岸和田市', '豊中市'],
      兵庫: ['神戸市', '姫路市', '尼崎市', '明石市'],
      奈良: ['奈良市', '大和高田市', '大和郡山市', '天理市'],
      和歌山: ['和歌山市', '海南市', '橋本市', '有田市'],
    },
  },
  中国: {
    name: '中国',
    prefectures: {
      鳥取: ['鳥取市', '米子市', '倉吉市', '境港市'],
      島根: ['松江市', '浜田市', '出雲市', '益田市'],
      岡山: ['岡山市', '倉敷市', '津山市', '玉野市'],
      広島: ['広島市', '呉市', '竹原市', '三原市'],
      山口: ['下関市', '宇部市', '山口市', '萩市'],
    },
  },
  四国: {
    name: '四国',
    prefectures: {
      徳島: ['徳島市', '鳴門市', '小松島市', '阿南市'],
      香川: ['高松市', '丸亀市', '坂出市', '善通寺市'],
      愛媛: ['松山市', '今治市', '宇和島市', '八幡浜市'],
      高知: ['高知市', '室戸市', '安芸市', '南国市'],
    },
  },
  '九州・沖縄': {
    name: '九州・沖縄',
    prefectures: {
      福岡: ['福岡市', '北九州市', '久留米市', '直方市'],
      佐賀: ['佐賀市', '唐津市', '鳥栖市', '多久市'],
      長崎: ['長崎市', '佐世保市', '島原市', '諫早市'],
      熊本: ['熊本市', '八代市', '人吉市', '荒尾市'],
      大分: ['大分市', '別府市', '中津市', '日田市'],
      宮崎: ['宮崎市', '都城市', '延岡市', '日南市'],
      鹿児島: ['鹿児島市', '鹿屋市', '枕崎市', '阿久根市'],
      沖縄: ['那覇市', '宜野湾市', '石垣市', '浦添市'],
    },
  },
};

const HeroSlider = () => {
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedPrefecture, setSelectedPrefecture] = useState('');
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [locationValue, setLocationValue] = useState('');
  const [locationTags, setLocationTags] = useState([]);
  const [currentStep, setCurrentStep] = useState('region');

  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setIsLocationDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (placeholderRef.current && locationTags.length > 0) {
      placeholderRef.current.scrollLeft = placeholderRef.current.scrollWidth;
    }
  }, [locationTags]);

  const handleLocationInputClick = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen);
    setCurrentStep('region');
    setSelectedRegion('');
    setSelectedPrefecture('');
    setSelectedAreas([]);
  };

  const handleRegionSelect = (regionKey) => {
    setSelectedRegion(regionKey);

    if (regionKey === '北海道') {
      setCurrentStep('area');
    } else {
      setCurrentStep('prefecture');
    }
  };

  const handlePrefectureSelect = (prefecture) => {
    setSelectedPrefecture(prefecture);
    setCurrentStep('area');
  };

  const handleAreaToggle = (area) => {
    setSelectedAreas((prev) => {
      if (prev.includes(area)) {
        return prev.filter((a) => a !== area);
      } else {
        return [...prev, area];
      }
    });
  };

  const handleConfirm = () => {
    let locationText = '';
    let tags = [];

    if (selectedRegion === '北海道') {
      if (selectedAreas.length > 0) {
        locationText = `北海道 (${selectedAreas.length}エリア選択)`;
        tags = selectedAreas;
      } else {
        locationText = '北海道';
      }
    } else if (selectedPrefecture && selectedAreas.length > 0) {
      locationText = `${selectedPrefecture} (${selectedAreas.length}エリア選択)`;
      tags = selectedAreas;
    } else if (selectedPrefecture) {
      locationText = selectedPrefecture;
      tags = [selectedPrefecture];
    } else if (selectedRegion) {
      locationText = locationData[selectedRegion].name;
    }

    setLocationValue(locationText);
    setLocationTags(tags);
    setIsLocationDropdownOpen(false);
  };

  const removeLocationTag = (tagToRemove) => {
    const updatedTags = locationTags.filter((tag) => tag !== tagToRemove);
    setLocationTags(updatedTags);

    if (updatedTags.length === 0) {
      setLocationValue('');
      setSelectedAreas([]);
    } else {
      if (selectedRegion === '北海道') {
        setLocationValue(`北海道 (${updatedTags.length}エリア選択)`);
      } else if (selectedPrefecture) {
        setLocationValue(
          `${selectedPrefecture} (${updatedTags.length}エリア選択)`,
        );
      }
      setSelectedAreas(updatedTags);
    }
  };

  const renderRegionSelection = () => (
    <div className="p-4">
      <h3 className="font-bold text-lg mb-4 text-gray-800">
        都道府県を選択してください
      </h3>

      {Object.entries(locationData).map(([regionKey, regionData]) => (
        <div key={regionKey} className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">
            {regionData.name}
          </h4>

          {regionKey === '北海道' ? (
            <button
              onClick={() => handleRegionSelect(regionKey)}
              className="px-3 py-1 mr-2 mb-2 border border-blue-300 text-blue-600 rounded hover:bg-blue-50 transition-colors"
            >
              北海道
            </button>
          ) : (
            <div className="flex flex-wrap gap-2">
              {Object.keys(regionData.prefectures).map((prefecture) => (
                <button
                  key={prefecture}
                  onClick={() => handleRegionSelect(regionKey)}
                  className="px-3 py-1 border border-blue-300 text-blue-600 rounded hover:bg-blue-50 transition-colors"
                >
                  {prefecture}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderPrefectureSelection = () => (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <button
          onClick={() => setCurrentStep('region')}
          className="text-blue-600 hover:text-blue-800 mr-2 text-xl"
        >
          ←
        </button>
        <span className="text-sm text-gray-600">
          選択された都道府県 &gt; {locationData[selectedRegion].name}
        </span>
      </div>

      <h3 className="font-bold text-lg mb-4 text-gray-800">
        都道府県を選択してください
      </h3>

      <div className="flex flex-wrap gap-2">
        {Object.keys(locationData[selectedRegion].prefectures).map(
          (prefecture) => (
            <button
              key={prefecture}
              onClick={() => handlePrefectureSelect(prefecture)}
              className="px-3 py-1 border border-blue-300 text-blue-600 rounded hover:bg-blue-50 transition-colors"
            >
              {prefecture}
            </button>
          ),
        )}
      </div>
    </div>
  );

  const renderAreaSelection = () => {
    const areas =
      selectedRegion === '北海道'
        ? locationData['北海道'].areas
        : locationData[selectedRegion].prefectures[selectedPrefecture];

    const count = selectedRegion === '北海道' ? '20' : '5';

    return (
      <div className="p-4">
        <div className="flex items-center mb-4">
          <button
            onClick={() =>
              setCurrentStep(
                selectedRegion === '北海道' ? 'region' : 'prefecture',
              )
            }
            className="text-[#006BA6]  mr-2 text-xl"
          >
            ←
          </button>
          <span className="text-sm text-gray-600">
            選択された都道府県 &gt;{' '}
            {selectedRegion === '北海道' ? '北海道' : selectedPrefecture} (
            {count})
          </span>
        </div>

        <h3 className="font-bold text-lg mb-4 text-gray-800">
          エリアを選択してください
        </h3>

        <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
          {areas.map((area) => (
            <label
              key={area}
              className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedAreas.includes(area)}
                onChange={() => handleAreaToggle(area)}
                className="w-4 h-4 text-[#006BA6] border-gray-300 rounded focus:ring-[#006BA6]"
              />
              <span className="text-[#006BA6]">{area}</span>
              <span className="text-gray-500 text-sm">(5)</span>
            </label>
          ))}
        </div>

        <button
          onClick={handleConfirm}
          className="w-full bg-[#006BA6] text-white py-2 px-4 rounded  transition-colors font-medium max-w-[179px] ml-auto cursor-pointer flex items-center justify-center hover:bg-[#005a8a] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          決定
        </button>
      </div>
    );
  };

  return (
    <div className="relative w-full mb-[200px] md:mb-[100px]">
      <div className="bg-gradient-to-r from-white to-blue-400">
        <div className="max-w-[1360px] mx-auto custom-slider">
          <Swiper
            modules={[Navigation]}
            navigation
            loop
            className="w-full h-[300px] md:h-[400px]"
          >
            {[1, 2, 3].map((_, i) => (
              <SwiperSlide key={i}>
                <div className="h-full w-full flex items-center justify-center">
                  <p className="text-white text-xl font-bold">Slide {i + 1}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="relative">
        <div className="flex z-10 relative bottom-[50px] left-1/2 transform -translate-x-1/2 w-[95%] md:w-[95%] lg:w-[80%] md:max-w-[100%] lg:max-w-[1360px] bg-white shadow-lg rounded-[5px] py-[14px] px-[20px]   items-center justify-between border border-[#DDDDDD] flex-col md:flex-row">
          <div className="flex flex-1 items-center w-full border-0 px-3 py-[10px] gap-[20px] h-[59px] border-r-0 md:border-r border-b md:border-b-0 border-[#BEBEBE]">
            <span>
              <Image
                src="/assets/svg/search-icon.svg"
                width={32}
                height={32}
                className="w-[20px] md:w-[32px] h-[20px] md:h-[32px]"
                alt="searchIcon"
              />
            </span>
            <input
              type="text"
              placeholder="キーワード"
              className="w-full outline-none text-[20px] text-[#2C3237] placeholder:text-[#2C3237]"
            />
          </div>

          <div className="flex flex-1  items-center w-full  border-0 px-3 py-[10px] gap-[20px] h-[59px] border-r-0 md:border-r border-[#BEBEBE] border-b md:border-b-0">
            <div className="w-[30px] flex">
              <Image
                src="/assets/svg/map-location.svg"
                width={22}
                height={30}
                className="w-[18px] md:w-[22px] h-[30px] md:h-[30px]"
                alt="mapLocationIcon"
              />
            </div>
            <div
              className="w-[79%] relative  h-full cursor-pointer"
              onClick={handleLocationInputClick}
            >
              {/* Placeholder text - shown when no tags and no location value */}
              {locationTags.length === 0 && !locationValue && (
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-[#2C3237] pointer-events-none z-0">
                  場所/エリア
                </div>
              )}

              {/* Tags container - shown when there are tags */}
              {locationTags.length > 0 && (
                <div
                  ref={placeholderRef}
                  className="flex items-center overflow-x-auto scrollbar-hide h-full gap-1 justify-flex-start z-10"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {locationTags.map((tag, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center bg-white border border-[#006BA6] text-[#006BA6] px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0"
                    >
                      <span>{tag}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeLocationTag(tag);
                        }}
                        className="ml-1 text-[#006BA6] hover:text-[#006BA6] rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Location value text - shown when there's a value but no tags */}
              {locationValue && locationTags.length === 0 && (
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-[#2C3237] pointer-events-none z-0">
                  {locationValue}
                </div>
              )}

              {/* Invisible input for click handling */}
              <input
                ref={inputRef}
                type="text"
                value=""
                readOnly
                className="w-full h-full outline-none cursor-pointer absolute top-0 left-0 bg-transparent -z-10 opacity-0"
              />
            </div>
            {isLocationDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-full left-0 md:left-[22%] right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-78%] max-w-full overflow-y-auto"
              >
                {currentStep === 'region' && renderRegionSelection()}
                {currentStep === 'prefecture' && renderPrefectureSelection()}
                {currentStep === 'area' && renderAreaSelection()}
              </div>
            )}
          </div>

          <div className="flex flex-1  w-full items-center   border-0 px-3 py-[10px] gap-[20px] h-[59px] border-r-0 md:border-r border-[#BEBEBE] border-b md:border-b-0">
            <span>
              <Image
                src="/assets/svg/knife-icon.svg"
                width={31}
                height={32}
                className="w-[16px] md:w-[31px] h-[32px] md:h-[32px]"
                alt="knifeIcon"
              />
            </span>
            <input
              type="text"
              placeholder="カテゴリ―"
              className="w-full outline-none text-[#2C3237] placeholder:text-[#2C3237]"
            />
          </div>
          <div className="flex flex-1  w-full items-center border-0 px-3 py-[10px] gap-[20px] border-b md:border-b-0 border-[#BEBEBE]">
            <span className="text-yellow-500">
              <Image
                src="/assets/svg/star-icon.svg"
                width={31}
                height={32}
                alt="starIcon"
                className="w-[20px] md:w-[31px] h-[20px] md:h-[32px]"
              />
            </span>
            <input
              type="text"
              placeholder="星レビュー"
              className="w-full outline-none text-[#2C3237] placeholder:text-[#2C3237]"
            />
          </div>
          <div className="flex w-full md:w-auto">
            <button className="text-[20px] mt-[16px] md:mt-0 cursor-pointer bg-[#006BA6] text-white md:px-[20px] lg:px-[70px] py-1.5 md:py-3.5 lg:py-5 rounded hover:bg-[#005a8a] transition-colors duration-200 w-full md:w-auto font-medium flex items-center justify-center">
              検索
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
