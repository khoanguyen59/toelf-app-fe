import MenuBar from '@components/menus/MenuBar';
import SideBar from '@components/menus/SideBar';
import TopicLayout from '@components/layouts/TopicLayout';
import { observer } from 'mobx-react';
import React from 'react';
import { AppContainer } from '@components/common/AppContainer';
import { AppWrapper } from '@components/common/AppWrapper';


const FavoriteTopics = () => {
  return (
    <AppContainer>
      <AppWrapper>
        <MenuBar />
        <TopicLayout />
        <SideBar />
      </AppWrapper>
    </AppContainer>
  );
};

export default observer(FavoriteTopics);
