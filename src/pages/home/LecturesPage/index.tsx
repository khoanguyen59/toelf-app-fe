import MenuBar from '@components/menus/MenuBar';
import SideBar from '@components/menus/SideBar';
import { observer } from 'mobx-react';
import React from 'react';
import { AppContainer } from '@components/common/AppContainer';
import { AppWrapper } from '@components/common/AppWrapper';
import LectureLayout from '@components/layouts/LectureLayout';
import { useStore } from '@/RootStoreProvider';

const LecturesPage = () => {
  const { userStore } = useStore();
  const { profileUser } = userStore;

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
