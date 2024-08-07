import React from 'react';
import TopicChips from '../../topic/TopicChips';
import BottomNavigationMenu from '@components/menus/BottomNavigationMenu';
import { LayoutContainer } from '@components/common/LayoutContainer';
import { observer } from 'mobx-react';
import LayoutHeader from '@components/headers/LayoutHeader';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { Box } from '@mui/material';

const TopicLayout = () => {
  return (
    <LayoutContainer>
      <LayoutHeader title={'Discover new topics'} icon={TagFacesIcon}/>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderBottom: '1px solid var(--outline)',
          maxWidth: '100%',
          height: '100vh',
          overflowY: 'auto',
          scrollbarWidth: 'none'
        }}
      >
        <TopicChips />
      </Box>
      <BottomNavigationMenu />
    </LayoutContainer>
  );
};

export default observer(TopicLayout);
