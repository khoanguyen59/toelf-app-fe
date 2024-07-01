import MenuBar from '@components/menus/MenuBar';
import SideBar from '@components/menus/SideBar';
import TopicLayout from '@components/layouts/TopicLayout';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { AppContainer } from '@components/common/AppContainer';
import { AppWrapper } from '@components/common/AppWrapper';
import { useStore } from '@/RootStoreProvider';

const FavoriteTopics = () => {
  const { topicStore } = useStore();
  const { topics, selectedTopics } = topicStore;

  useEffect(() => {
    topicStore.getTopics();
    topicStore.getSelectedTopicsByUser(1);
  }, []);

  return (
    <AppContainer>
      <AppWrapper>
        <MenuBar />
        <TopicLayout
          topics={topics}
          selectedTopics={selectedTopics}
        />
        <SideBar />
      </AppWrapper>
    </AppContainer>
  );
};

export default observer(FavoriteTopics);
