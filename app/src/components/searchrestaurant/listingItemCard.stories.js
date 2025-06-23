import React from 'react';
import ListingItemCard from './ListingItemCard';

export default {
  title: 'Search Restaurant Listing Item Card',
  component: ListingItemCard,
};

const Template = (args) => <ListingItemCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '1',
    title: 'インペリアブッフェ - 帝国ホテルレストラン - ',
    price: 5000,
    rating: 5,
    category: '和食 / グルメ',
    station: '新宿駅 徒歩2分',
    tagline: '美味しさと雰囲気が自慢。',
    description:
      'こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になりますこちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります。こちらは店舗の説明になります',
    image: '/assets/images/restaurant-image.png',
    reviews: 20,
};
