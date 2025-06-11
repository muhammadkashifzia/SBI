import React from 'react';
import Image from 'next/image';
import CTA from '@/components/about/ctaBanner';
import UserGuideStepsGridList from '@/components/about/userGuideStepsGridList';
import UserGuide from '@/components/about/userGuideStep';
export default function About() {
  return (
    <div className="container mx-auto px-[16px] mb-[47px] md:mb-[85px]">
     <UserGuideStepsGridList />
     <UserGuide />
     <CTA />
    </div>
  );
}
