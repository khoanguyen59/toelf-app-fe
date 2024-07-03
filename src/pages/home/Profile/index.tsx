import MenuBar from '@components/menus/MenuBar';
import SideBar from '@components/menus/SideBar';
import React from 'react';
import { AppContainer } from '@components/common/AppContainer';
import { AppWrapper } from '@components/common/AppWrapper';
import ProfileLayout from '@components/layouts/ProfileLayout';

const Profile: React.FC = () => {
  return (
    <AppContainer>
      <AppWrapper>
        <MenuBar />
        <ProfileLayout />
        <SideBar />
      </AppWrapper>
    </AppContainer>
  );
};

export default Profile;
