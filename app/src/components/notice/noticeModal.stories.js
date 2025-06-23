import React, { useState } from 'react';
import AnnouncementModal from '@/components/notice/noticeModal.jsx';

export default {
  title: 'Components/AnnouncementModal',
  component: AnnouncementModal,
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnnouncementModal
      {...args}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
