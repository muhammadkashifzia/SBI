// ShopInfo.stories.jsx
import React from 'react';
import ShopInfo from './ShopInfo';

export default {
  title: 'Shop Info Detail',
  component: ShopInfo,
};

const Template = (args) => <ShopInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: '渋谷居酒屋 炙り屋',
  furigana: 'しぶやいざかや あぶりや',
  phone: '03-1234-5678',
  postalCode: '150-0002',
  address: '東京都渋谷区渋谷2-21-1',
  station: '渋谷駅',
  businessHours: [
    { day: '月〜金', time: '17:00〜23:00' },
    { day: '土日祝', time: '16:00〜24:00' },
  ],
  parking: '近隣にコインパーキングあり',
  website: 'https://example.com',
  socialLinks: {
    facebook: 'https://facebook.com/example',
    instagram: 'https://instagram.com/example',
    tiktok: 'https://tiktok.com/@example',
    twitter: 'https://twitter.com/example',
    youtube: 'https://youtube.com/@example',
  },
};
