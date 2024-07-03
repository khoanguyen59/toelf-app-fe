import MenuBar from '@components/menus/MenuBar';
import SideBar from '@components/menus/SideBar';
import { observer } from 'mobx-react';
import React from 'react';
import { AppContainer } from '@components/common/AppContainer';
import { AppWrapper } from '@components/common/AppWrapper';
import BookmarkLayout from '@components/layouts/BookmarkLayout';

const Bookmarks = () => {
  return (
    <AppContainer>
      <AppWrapper>
        <MenuBar />
        <BookmarkLayout />
        <SideBar />
      </AppWrapper>
    </AppContainer>
  );
};

export default observer(Bookmarks);
