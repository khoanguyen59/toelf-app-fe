import MenuBar from '@components/menus/SideBarMenu';
import SideBar from '@components/menus/SideBar';
import TopicLayout from '@components/layouts/TopicLayout';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { AppContainer } from '@components/common/AppContainer';
import { AppWrapper } from '@components/common/AppWrapper';
import { useStore } from '@/RootStoreProvider';


const TopicsPage = () => {
  const { userStore } = useStore();
  const { profileUser } = userStore;

  useEffect(() => {
    if (!profileUser) userStore.getUser();
  }, []);

  return (
    <AppContainer>
      <AppWrapper>
        <MenuBar profileUser={profileUser} />
        <TopicLayout />
        <SideBar />
      </AppWrapper>
    </AppContainer>
  );
};

export default observer(TopicsPage);
