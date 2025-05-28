// components/AreaGrid.tsx
import Image from 'next/image';

const areas = [
  { name: '東京', image: '/assets/images/tokyo.png' },
  { name: '神奈川', image: '/assets/images/kanagawa.png' },
  { name: '大阪', image: '/assets/images/osaka.png' },
  { name: '愛知', image: '/assets/images/aichi.png' },
  { name: '福岡', image: '/assets/images/fukuoka.png' },
  { name: '北海道', image: '/assets/images/hokkaido.png' },
];

export default function AreaGrid() {
  return (
    <div className="mt-[89px] md:mt-[100px]">
      <h2 className="text-[24px] md:text-[32px] font-bold mb-5 text-[#2C3237]">エリアから探す</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[32px] gap-y-[31px]">
        {areas.map((area) => (
          <div key={area.name} className="relative group overflow-hidden rounded-[5px] shadow-lg cursor-pointer">
            <Image
              src={area.image}
              alt={area.name}
              width={600}
              height={400}
              className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0  flex items-center justify-center">
              <span className="text-white text-[32px] font-medium">{area.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
