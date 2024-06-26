import { LayoutContainer } from '@components/common/LayoutContainer';
import ProfileHeader from '@components/headers/ProfileHeader';
import BottomNavigationMenu from '@components/menus/BottomNavigationMenu';
import ProfilePage from '@components/profile/ProfilePage';
import React from 'react';

const ProfileLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <ProfileHeader name={'Elton Lazzarin'} numberOfTweets={432}/>
      <ProfilePage />
      <BottomNavigationMenu />
    </LayoutContainer>
  );
};

export default ProfileLayout;
