import React from 'react';
import TopicChips from '../../topic/TopicChips';
import ProfileHeader from '@components/headers/ProfileHeader';
import BottomNavigationMenu from '@components/menus/BottomNavigationMenu';
import { LayoutContainer } from '@components/common/LayoutContainer';
import { observer } from 'mobx-react';

const TopicLayout = () => {
  return (
    <LayoutContainer>
      <ProfileHeader />
      <TopicChips />
      <BottomNavigationMenu />
    </LayoutContainer>
  );
};

export default observer(TopicLayout);
