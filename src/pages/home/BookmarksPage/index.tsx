import MenuBar from '@components/menus/MenuBar';
import SideBar from '@components/menus/SideBar';
import { observer } from 'mobx-react';
import React from 'react';
import { AppContainer } from '@components/common/AppContainer';
import { AppWrapper } from '@components/common/AppWrapper';
import BookmarkLayout from '@components/layouts/BookmarkLayout';
import { useStore } from '@/RootStoreProvider';

const BookmarksPage = () => {
  const { userStore } = useStore();
  const { profileUser } = userStore;

  return (
    <AppContainer>
      <AppWrapper>
        <MenuBar profileUser={profileUser} />
        <BookmarkLayout />
        <SideBar />
      </AppWrapper>
    </AppContainer>
  );
};

export default observer(BookmarksPage);
