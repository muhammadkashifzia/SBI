import React from 'react';
import Link from 'next/link';
const AreaList = () => {
  const categories = [
    {
      title: '東京都',
      items: [
        '港・千代田・中央',
        '豊島・新宿・渋谷・文京',
        '目黒・品川・太田',
        '台東・墨田・江東・葛飾・江戸川',
        '北多摩(三鷹・府中・立川)',
        '南多摩(八王子・町田・稲城)',
        '西多摩(福生・青梅・あきる野)',
        '伊豆・小笠原諸島',
      ],
    },
    {
      title: '神奈川県',
      items: [
        '横浜',
        '川崎',
        '横須賀三浦(鎌倉・横須賀・逗子)',
        '県央(相模原・厚木・海老名)',
        '湘南(平塚・藤沢・茅ヶ崎)',
        '県西(小田原・箱根・南足柄)',
      ],
    },
    {
      title: '大阪府',
      items: [
        '大阪',
        '北摂（高槻・吹田・箕面）',
        '河内内（枚方・東大阪・河内長野）',
        '泉州(堺・岸和田・泉佐野)',
      ],
    },
    {
      title: '愛知県',
      items: [
        '名古屋',
        '尾張(津島・一宮・瀬戸)',
        '知多(半田・常滑・東海)',
        '西三河(岡崎・刈谷・豊田 )',
        '東三河(豊橋・新城・田原 )',
      ],
    },
    {
      title: '福岡県',
      items: [
        '福岡(福岡・糸島・大宰府)',
        '北九州(北九州・行橋・豊前)',
        '筑豊(直方・宮若・嘉麻)',
        '筑後(久留米・八女・大牟田)',
      ],
    },
    {
      title: '北海道',
      items: [
        '石狩(札幌・千歳・石狩)',
        '渡島・檜山(函館・北斗・せたな)',
        '後志(小樽・ニセコ・黒松内)',
        '空知(夕張・岩見沢・沼田)',
        '上川(旭川・富良野・名寄)',
        '留萌(留萌・羽幌・天塩)',
        '宗谷(稚内・利尻・枝幸)',
        '網走(紋別・北見・網走)',
        '胆振(室蘭・登別・苫小牧)',
        '日高(日高・平取・えりも)',
        '十勝(広尾・帯広・足寄)',
        '十勝(広尾・帯広・足寄)',
        '根室(根室・別海・中標津)',
      ],
    },
  ];

  return (
    <div className="mt-[20px] space-y-[30px]">
      {categories.map((category, index) => (
        <div key={index} className="space-x-[144px] flex flex-col md:flex-row">
          <h2 className="text-[20px] font-semibold w-full md:w-[15%] max-w-[100px] mb-[10px] md:mb-0">
            {category.title}
          </h2>
          <div className="flex gap-[20px] flex-wrap w-full md:w-[85%]">
            {category.items.map((item, idx) => (
              <Link
                key={idx}
                href="/restaurants"
                className="cursor-pointer text-[#006BA6] hover:underline border border-[#CBCBCB] rounded-[3px] text-[18px] font-medium px-[5px]  h-[33px] "
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      ))}
        <div className='flex justify-center mt-[50px]'>  <button className='cursor-pointer text-[#006BA6] text-[20px] font-normal'>もっと見る</button></div>
    </div>
  );
};

export default AreaList;
