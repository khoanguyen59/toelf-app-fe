import MenuBar from '@components/menus/MenuBar';
import SideBar from '@components/menus/SideBar';
import { observer } from 'mobx-react';
import React from 'react';
import { AppContainer } from '@components/common/AppContainer';
import { AppWrapper } from '@components/common/AppWrapper';
import LectureDetailLayout from '@components/layouts/LectureDetailLayout';

const LectureDetailPage = () => {
  return (
    <AppContainer>
      <AppWrapper>
        <MenuBar />
        <LectureDetailLayout />
        <SideBar />
      </AppWrapper>
    </AppContainer>
  );
};

export default observer(LectureDetailPage);
