import React from 'react';
import ReviewList from './ReviewList';

export default {
  title: 'Components/ReviewList',
  component: ReviewList,
};

const mockReviews = [
  {
    rating: 4,
    comment: 'とても良い体験でした！また行きたいです。',
    username: 'ユーザー1',
  },
  {
    rating: 5,
    comment: '素晴らしいサービスと雰囲気！',
    username: 'ユーザー2',
  },
  {
    rating: 3,
    comment: '平均的でしたが、また試す価値あり。',
    username: 'ユーザー3',
  },
  {
    rating: 2,
    comment: '期待していたほどではありませんでした。',
    username: 'ユーザー4',
  },
  {
    rating: 5,
    comment: '最高の体験！星5つ！',
    username: 'ユーザー5',
  },
  {
    rating: 4,
    comment: 'とてもフレンドリーなスタッフ。',
    username: 'ユーザー6',
  },
  {
    rating: 3,
    comment: '悪くはなかったですが、もう少し改善の余地があります。',
    username: 'ユーザー7',
  },
];

const Template = (args) => <ReviewList {...args} />;

export const Default = Template.bind({});
Default.args = {
  reviews: mockReviews,
};
