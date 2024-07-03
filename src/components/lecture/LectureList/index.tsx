import { DEFAULT_PAGE_SIZE } from '@/constants/pagination.constants';
import LectureCard from '@components/common/LectureCard';
import { InfoLecture } from '@dto/lectures/InfoLecture.dto';
import { Box } from '@mui/system';
import { observer } from 'mobx-react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface ComponentProps {
  lectures?: InfoLecture[];
  lectureCount?: number;
  loadMoreLectures?: () => void;
}

const LectureList = (props: ComponentProps) => {
  const { lectures, lectureCount, loadMoreLectures } = props;
  return (
    <InfiniteScroll
      dataLength={lectures.length}
      next={loadMoreLectures}
      hasMore={true}
      loader={<p>Loading...</p>}
      endMessage={<p>No more data to load.</p>}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '100%',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          '*::-webkit-scrollbar': {
            width: '0.4em'
          }
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0,
            }}
          >
            {lectures.map((lecture, index) => (
              <LectureCard lecture={lecture} key={index}/>
            ))}
          </Box>
        </Box>
      </Box>
    </InfiniteScroll>
  );
};

export default observer(LectureList);
