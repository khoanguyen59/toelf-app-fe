import React, { useEffect } from 'react';
import { Body } from './styles';
import { SearchInput } from '@components/common/SearchInput';
import { useStore } from '@/RootStoreProvider';
import { observer } from 'mobx-react';
import SuggestedLectures from '@components/lecture/SuggestedLectures';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import { MenuList, ListItemText, ListItemIcon, Divider, MenuItem } from '@mui/material';
import Check from '@mui/icons-material/Check';
import MinifiedLectureCard from '@components/lecture/MinifiedLectureCard';

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
        <SearchInput placeholder="Search Topics, Lecture,..." />
        <SearchIcon
          sx={{
            width: '27px',
            height: '27px',
            fill: 'var(--gray)'
          }}
        />
      </Box>
      <SuggestedLectures suggestedLectures={suggestedLectures} />
      <Body>
        <SuggestedLectures suggestedLectures={suggestedLectures} />
      </Body>
    </Box>
  );
};

export default observer(SideBar);
