import React from 'react';
import Banner from '@/components/home/banner';

export default {
  title: 'Components/Home Page Banner',
  component: Banner,
  args: {
    title1: "無料で店舗登録",
    title2: "最短３分!",
    buttonText: "店舗を掲載して集客スタート",
    backgroundImage: "/assets/images/register-store-banner02.jpg",
    bannerLinkUrl: "/restaurants",
  },
};

export const HomeBanner = (args) => <Banner {...args} />;
