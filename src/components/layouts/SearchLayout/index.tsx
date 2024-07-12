import { useStore } from '@/RootStoreProvider';
import { LayoutContainer } from '@components/common/LayoutContainer';
import SearchBar from '@components/common/SearchBar';
import LayoutHeader from '@components/headers/LayoutHeader';
import SuggestedLectures from '@components/lecture/SuggestedLectures';
import BottomNavigationMenu from '@components/menus/BottomNavigationMenu';
import { InfoUser } from '@dto/users/InfoUser.dto';
import { Box } from '@mui/material';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';

interface ComponentProps {
  profileUser: InfoUser;
}

const SearchLayout = (props: ComponentProps) => {
  const { profileUser } = props;
  const { lectureStore } = useStore();
  const { suggestedLectures } = lectureStore;

  useEffect(() => {
    lectureStore.getSuggestedLectures();
  }, []);

  return (
    <LayoutContainer>
      <LayoutHeader title={'Search'} />
      <Box sx={{ height: '100vh' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 'min(399px, 100%)',
          }}
        >
          <Box
            sx={{
              padding: '10px 16px 10px 24px',
              width: 'min(399px, 100%)',
              position: 'fixed',
              top: 0,
              zIndex: 2,
              maxHeight: '57px',
              marginTop: '66px'
            }}
          >
            <SearchBar />
          </Box>
          {/* <Box
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
          </Box> */}
        </Box>
      </Box>
      <BottomNavigationMenu />
    </LayoutContainer>
  );
};

export default observer(SearchLayout);
