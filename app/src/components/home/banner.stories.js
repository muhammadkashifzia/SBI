import React from 'react';
import Banner from '@/components/home/banner';

export default {
  title: 'Components/Home Page Banner',
  component: Banner,
  args: {
    title1: "全国で掲載店舗拡大中",
    title2: "お得に使用できる店舗を探そう",
    buttonText: "掲載店舗を探す",
    backgroundImage: "/assets/images/banner.png",
    bannerLinkUrl: "/home",
  },
};

export const HomeBanner = (args) => <Banner {...args} />;
