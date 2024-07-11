import React, { useEffect } from 'react';
import { useStore } from '@/RootStoreProvider';
import { observer } from 'mobx-react';
import SuggestedLectures from '@components/lecture/SuggestedLectures';
import { Box } from '@mui/system';
import SearchBar from '@components/common/SearchBar';

const SideBar: React.FC = () => {
  const { lectureStore } = useStore();
  const { suggestedLectures } = lectureStore;

  useEffect(() => {
    lectureStore.getSuggestedLectures();
  }, []);

  return (
    <Box
      sx={{
        display: 'none',
        '@media (min-width: 1000px)': {
          display: 'flex',
          flexDirection: 'column',
          width: 'min(399px, 100%)',
        }
      }}
    >
      <Box
        sx={{
          padding: '10px 24px',
          width: 'min(399px, 100%)',
          position: 'fixed',
          top: 0,
          zIndex: 2,
          maxHeight: '57px',
        }}
      >
        <SearchBar />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '57px 24px 200px',
          marginTop: '3px',
          '> div + div': {
            marginTop: '15px',
          },
          minWidth: '399px',
        }}
      >
        <SuggestedLectures suggestedLectures={suggestedLectures} />
      </Box>
    </Box>
  );
};

export default observer(SideBar);
