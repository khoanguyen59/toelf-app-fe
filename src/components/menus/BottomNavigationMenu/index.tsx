import React from 'react';
import {
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const BottomNavigationMenu: React.FC = () => {
  return (
    <BottomMenu>
      <HomeIcon className="active" />
      <SearchIcon />
      <BellIcon />
      <EmailIcon />
    </BottomMenu>
  );
};

export default BottomNavigationMenu;
