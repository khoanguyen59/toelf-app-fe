import MenuBar from '@components/menus/MenuBar';
import SideBar from '@components/menus/SideBar';
import { observer } from 'mobx-react';
import React from 'react';
import { AppContainer } from '@components/common/AppContainer';
import { AppWrapper } from '@components/common/AppWrapper';
import LectureLayout from '@components/layouts/LectureLayout';

const Lectures = () => {
  return (
    <AppContainer>
      <AppWrapper>
        <MenuBar />
        <LectureLayout />
        <SideBar />
      </AppWrapper>
    </AppContainer>
  );
};

export default observer(Lectures);
