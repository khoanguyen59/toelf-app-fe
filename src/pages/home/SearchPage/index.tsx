import MenuBar from '@components/menus/SideBarMenu';
import SideBar from '@components/menus/SideBar';
import React, { useEffect } from 'react';
import { AppContainer } from '@components/common/AppContainer';
import { AppWrapper } from '@components/common/AppWrapper';
import ProfileLayout from '@components/layouts/ProfileLayout';
import { useStore } from '@/RootStoreProvider';
import SearchLayout from '@components/layouts/SearchLayout';

const SearchPage: React.FC = () => {
  const { userStore } = useStore();
  const { profileUser } = userStore;

  useEffect(() => {
    if (!profileUser) userStore.getUser();
  }, []);
  
  return (
    <AppContainer>
      <AppWrapper>
        <MenuBar profileUser={profileUser} />
        <SearchLayout profileUser={profileUser} />
      </AppWrapper>
    </AppContainer>
  );
};

export default SearchPage;
