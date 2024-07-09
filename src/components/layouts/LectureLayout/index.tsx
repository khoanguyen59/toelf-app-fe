import { DEFAULT_PAGE_SIZE, FIRST_LOAD_SIZE } from '@/constants/pagination.constants';
import { useStore } from '@/RootStoreProvider';
import { LayoutContainer } from '@components/common/LayoutContainer';
import LayoutHeader from '@components/headers/LayoutHeader';
import LectureList from '@components/lecture/LectureList';
import BottomNavigationMenu from '@components/menus/BottomNavigationMenu';
import { PaginationRequest } from '@dto/commons/PaginationRequest.dto';
import { InfoLecture } from '@dto/lectures/InfoLecture.dto';
import { TopicCategory } from '@enums/topic.enum';
import { useQuery } from '@utils/api.utils';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';

const DEFAULT_QUERY: PaginationRequest<InfoLecture> = {
  skip: 0,
  take: DEFAULT_PAGE_SIZE,
  search: '',
  orderBy: 'name',
  orderDirection: 'ASC',
};

interface ComponentProps {}

const LectureLayout: React.FC = () => {
  const urlQuery = useQuery();
  const topicParams = urlQuery.getAll('topics');
  const categoryParams = urlQuery.getAll('categories');
  const [query, setQuery] = React.useState<PaginationRequest<InfoLecture>>({
    ...DEFAULT_QUERY,
    filters: {
      stringifiedTopics: topicParams,
      stringifiedCategories: categoryParams,
    }
  });
  const { lectureStore } = useStore();
  const { lectures, lectureCount } = lectureStore;

  useEffect(() => {
    lectureStore.getLectures(query);
  }, [query]);

  const loadMoreLectures = () => {
    setQuery({
      ...query,
      skip: lectureCount,
      take: DEFAULT_PAGE_SIZE,
    });
  }

  return (
    <LayoutContainer>
      <LayoutHeader title={`Lectures for you`} />
      <LectureList lectures={lectures} lectureCount={lectureCount} loadMoreLectures={loadMoreLectures}/>
      <BottomNavigationMenu />
    </LayoutContainer>
  );
};

export default observer(LectureLayout);
