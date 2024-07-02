import MenuBar from '@components/menus/MenuBar';
import SideBar from '@components/menus/SideBar';
import TopicLayout from '@components/layouts/TopicLayout';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { AppContainer } from '@components/common/AppContainer';
import { AppWrapper } from '@components/common/AppWrapper';
import { useStore } from '@/RootStoreProvider';
import { InfoTopic } from '@dto/topics/InfoTopic.dto';
import { FIRST_LOAD_SIZE } from '@/constants/pagination.constants';
import { PaginationRequest } from '@dto/commons/PaginationRequest.dto';

const DEFAULT_QUERY: PaginationRequest<InfoTopic> = {
  skip: 0,
  take: FIRST_LOAD_SIZE,
  search: '',
  orderBy: 'name',
  orderDirection: 'ASC',
};

const FavoriteTopics = () => {
  const [query, setQuery] = useState<PaginationRequest<InfoTopic>>({
    ...DEFAULT_QUERY,
  });

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
