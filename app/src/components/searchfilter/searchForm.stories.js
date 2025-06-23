import React from 'react';
import SearchForm from '@/components/searchfilter/SearchForm.jsx';


export default {
  title: 'Search Filter',
  component: SearchForm,
};

const Template = (args) => <div className='mt-[130px]'><SearchForm {...args} /></div>;

export const Default = Template.bind({});
Default.args = {};
