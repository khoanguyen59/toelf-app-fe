import React from 'react';
import TopicChips from '../../topic/TopicChips';
import BottomNavigationMenu from '@components/menus/BottomNavigationMenu';
import { LayoutContainer } from '@components/common/LayoutContainer';
import { observer } from 'mobx-react';
import LayoutHeader from '@components/headers/LayoutHeader';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const TopicLayout = () => {
  return (
    <LayoutContainer>
      <LayoutHeader title={'Discover new topics'} icon={TagFacesIcon}/>
      <TopicChips />
      <BottomNavigationMenu />
    </LayoutContainer>
  );
};

export default observer(TopicLayout);
