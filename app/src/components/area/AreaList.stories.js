import React from 'react';
import AreaList from '@/components/area/AreaList.jsx';

export default {
  title: 'AreaList',
  component: AreaList,
};

const Template = (args) => <AreaList {...args} />;

export const Default = Template.bind({});
Default.args = {};
