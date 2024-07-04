import { DEFAULT_PAGE_SIZE, FIRST_LOAD_SIZE } from '@/constants/pagination.constants';
import { useStore } from '@/RootStoreProvider';
import { LayoutContainer } from '@components/common/LayoutContainer';
import LayoutHeader from '@components/headers/LayoutHeader';
import ProfileHeader from '@components/headers/ProfileHeader';
import LectureList from '@components/lecture/LectureList';
import BottomNavigationMenu from '@components/menus/BottomNavigationMenu';
import { PaginationRequest } from '@dto/commons/PaginationRequest.dto';
import { InfoBookmark, InfoLecture } from '@dto/lectures/InfoLecture.dto';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';

const DEFAULT_QUERY: PaginationRequest<InfoBookmark> = {
  skip: 0,
  take: DEFAULT_PAGE_SIZE,
  search: '',
  orderBy: 'name',
  orderDirection: 'ASC',
};

interface ComponentProps {}

const BookmarkLayout: React.FC = () => {
  const [query, setQuery] = React.useState<PaginationRequest<InfoBookmark>>({
    ...DEFAULT_QUERY,
  });

  const { lectureStore } = useStore();
  const { bookmarks, bookmarkCount } = lectureStore;

  useEffect(() => {
    lectureStore.getBookmarks(query);
  }, [query]);

  const loadMoreLectures = () => {
    setQuery({
      ...query,
      skip: bookmarkCount,
      take: DEFAULT_PAGE_SIZE,
    });
  }

  return (
    <LayoutContainer>
      <LayoutHeader title={'Your bookmarks'} />
      <LectureList lectures={bookmarks} lectureCount={bookmarkCount} loadMoreLectures={loadMoreLectures}/>
      <BottomNavigationMenu />
    </LayoutContainer>
  );
};

export default observer(BookmarkLayout);
