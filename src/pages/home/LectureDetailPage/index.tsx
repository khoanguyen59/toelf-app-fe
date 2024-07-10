import MenuBar from '@components/menus/SideBarMenu';
import SideBar from '@components/menus/SideBar';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { AppContainer } from '@components/common/AppContainer';
import { AppWrapper } from '@components/common/AppWrapper';
import LectureDetailLayout from '@components/layouts/LectureDetailLayout';
import { useStore } from '@/RootStoreProvider';

const LectureDetailPage = () => {
  const { userStore } = useStore();
  const { profileUser } = userStore;

  useEffect(() => {
    if (!profileUser) userStore.getUser();
  }, []);
  
  return (
    <AppContainer>
      <AppWrapper>
        <MenuBar profileUser={profileUser} />
        <LectureDetailLayout />
        <SideBar />
      </AppWrapper>
    </AppContainer>
  );
};

export default observer(LectureDetailPage);
