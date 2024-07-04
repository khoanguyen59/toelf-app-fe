import { LayoutContainer } from '@components/common/LayoutContainer';
import ProfileHeader from '@components/headers/ProfileHeader';
import BottomNavigationMenu from '@components/menus/BottomNavigationMenu';
import ProfilePage from '@components/profile/ProfileSection';
import { observer } from 'mobx-react';
import React from 'react';

const ProfileLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <ProfileHeader />
      <ProfilePage />
      <BottomNavigationMenu />
    </LayoutContainer>
  );
};

export default observer(ProfileLayout);
