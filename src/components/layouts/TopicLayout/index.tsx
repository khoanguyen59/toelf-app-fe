import React from 'react';
import TopicChips from '../../topic/TopicChips';
import ProfileHeader from '@components/headers/ProfileHeader';
import BottomNavigationMenu from '@components/menus/BottomNavigationMenu';
import { LayoutContainer } from '@components/common/LayoutContainer';

const TopicLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <ProfileHeader name={'Elton Lazzarin'} numberOfTweets={432}/>
      <TopicChips />
      <BottomNavigationMenu />
    </LayoutContainer>
  );
};

export default TopicLayout;
