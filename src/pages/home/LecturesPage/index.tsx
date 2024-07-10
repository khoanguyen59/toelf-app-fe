import MenuBar from '@components/menus/SideBarMenu';
import SideBar from '@components/menus/SideBar';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { AppContainer } from '@components/common/AppContainer';
import { AppWrapper } from '@components/common/AppWrapper';
import LectureLayout from '@components/layouts/LectureLayout';
import { useStore } from '@/RootStoreProvider';

const LecturesPage = () => {
  const { userStore } = useStore();
  const { profileUser } = userStore;

  useEffect(() => {
    if (!profileUser) userStore.getUser();
  }, []);
  
  return (
    <AppContainer>
      <AppWrapper>
        <MenuBar profileUser={profileUser} />
        <LectureLayout />
        <SideBar />
      </AppWrapper>
    </AppContainer>
  );
};

export default observer(LecturesPage);
