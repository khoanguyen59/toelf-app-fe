import { DEFAULT_PAGE_SIZE } from '@/constants/pagination.constants';
import LectureCard from '@components/lecture/LectureCard';
import { InfoBookmark, InfoLecture } from '@dto/lectures/InfoLecture.dto';
import { Box } from '@mui/system';
import { observer } from 'mobx-react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface ComponentProps {
  lectures?: Array<InfoLecture | InfoBookmark>;
  lectureCount?: number;
  loadMoreLectures?: () => void;
}

const LectureList = (props: ComponentProps) => {
  const { lectures, lectureCount, loadMoreLectures } = props;
  return (
    <Box
      id='lecture-scroll'
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
          <InfiniteScroll
            scrollableTarget='lecture-scroll'
            dataLength={lectureCount}
            next={loadMoreLectures}
            hasMore={lectureCount > 0 && lectureCount % DEFAULT_PAGE_SIZE === 0}
            loader={<p>Loading...</p>}
          >
            {lectures.map((lecture, index) => (
              <LectureCard lecture={lecture} key={index}/>
            ))}
          </InfiniteScroll>
        </Box>
      </Box>
    </Box>
  );
};

export default observer(LectureList);
