import React, { useEffect } from 'react';

import {
  Container,
  SearchWrapper,
  SearchIcon,
  Body,
} from './styles';
import { SearchInput } from '@components/common/SearchInput';
import SuggestedLectures from '@components/common/SuggestedLectures';
import { useStore } from '@/RootStoreProvider';
import { observer } from 'mobx-react';

const SideBar: React.FC = () => {
  const { lectureStore } = useStore();
  const { suggestedLectures } = lectureStore;

  useEffect(() => {
    lectureStore.getSuggestedLectures();
  }, []);

  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Topics, Lecture,..." />
        <SearchIcon />
      </SearchWrapper>
      <Body>
        <SuggestedLectures suggestedLectures={suggestedLectures} />
      </Body>
    </Container>
  );
};

export default observer(SideBar);
