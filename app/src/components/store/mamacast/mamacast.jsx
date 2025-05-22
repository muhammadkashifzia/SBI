// pages/index.tsx or wherever you're using the cast list
import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const MamaModal = dynamic(() => import('../modal/mamamodal'), {
  ssr: false,
});

const castMembers = [
  {
    name: 'スナック りえ',
    image: '/assets/images/demo.png',
  },
  {
    name: 'スナック りえ',
    image: '/assets/images/demo.png',
  },
  {
    name: 'スナック りえ',
    image: '/assets/images/demo.png',
  },
];

export default function MamaCast() {
const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="bg-white mt-[48px] md:mt-[0px]">
      <div className="max-w-6xl mx-auto mb-[64px]">
        <div className="mb-[32px]">
          <span className="block w-[32px] h-[2px] bg-[#B900B3] mb-[16px]"></span>
          <h2 className="text-[15px] md:text-[20px] text-[#1E1C1C] font-bold">
            ママ・キャスト
          </h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-[16px] mt-8">
          {castMembers.map((member, index) => (
            <div
              key={index}
              className="text-center cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="w-full h-auto overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-[4px] text-[14px] text-[#1E1C1C] font-medium">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <MamaModal
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          member={selectedMember}
        />
      )}
    </div>
  );
}
