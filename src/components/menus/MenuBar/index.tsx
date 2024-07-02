import { SideBarMenu, sideBarMenus } from '@/routers/routes';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../common/Button';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Topside>
        <Logo />
        {sideBarMenus.map((menu: SideBarMenu) => (
          <MenuButton onClick={() => navigate(menu.path || '/home')}>
            {menu.icon}
            <span>{menu.name}</span>
          </MenuButton>
        ))}
        <Button>
          <span>Tweet</span>
        </Button>
      </Topside>
      {/* <Botside>
        <Avatar>
          <img
            src="https://avatars1.githubusercontent.com/u/53025782?s=400&u=f1ffa8eaccb8545222b7c642532161f11e74a03d&v=4"
            alt="Elton Lazzarin"
          />
        </Avatar>
        <ProfileData>
          <strong>Elton Lazzarin</strong>
          <span>@elton_lazzarin</span>
        </ProfileData>
        <ExitIcon />
      </Botside> */}
    </Container>
  );
};

export default MenuBar;
