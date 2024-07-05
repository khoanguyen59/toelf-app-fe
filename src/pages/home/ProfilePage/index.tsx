import MenuBar from '@components/menus/MenuBar';
import SideBar from '@components/menus/SideBar';
import React, { useEffect } from 'react';
import { AppContainer } from '@components/common/AppContainer';
import { AppWrapper } from '@components/common/AppWrapper';
import ProfileLayout from '@components/layouts/ProfileLayout';
import { useStore } from '@/RootStoreProvider';

const ProfilePage: React.FC = () => {
  const { userStore } = useStore();
  const { profileUser } = userStore;

  useEffect(() => {
    userStore.getUser();
  }, []);
  
  return (
    <AppContainer>
      <AppWrapper>
        <MenuBar profileUser={profileUser} />
        <ProfileLayout profileUser={profileUser} />
        <SideBar />
      </AppWrapper>
    </AppContainer>
  );
};

export default ProfilePage;
