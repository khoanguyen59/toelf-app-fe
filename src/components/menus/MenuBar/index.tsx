import { SideBarMenu, sideBarMenus } from '@/routers/routes';
import { InfoUser } from '@dto/users/InfoUser.dto';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../common/Button';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  Avatar,
  Botside,
  ExitIcon,
  ProfileData,
} from './styles';

interface ComponentProps {
  profileUser?: InfoUser;
}

const MenuBar = (props: ComponentProps) => {
  const { profileUser } = props;
  const navigate = useNavigate();
  return (
    <Container>
      <Topside>
        <Logo />
        {sideBarMenus.map((menu: SideBarMenu, index) => (
          <MenuButton onClick={() => navigate(menu.path || '/home')} key={index}>
            {menu.icon}
            <span>{menu.name}</span>
          </MenuButton>
        ))}
        <Button>
          <span>Tweet</span>
        </Button>
      </Topside>
      <Botside>
        <Avatar>
          <img
            src='https://avatars.githubusercontent.com/u/44763499?s=400&u=800d425529ae859a491de74413fd6a5f6abff9f6&v=4'
            alt="Elton Lazzarin"
          />
        </Avatar>
        <ProfileData>
          <strong>{profileUser?.fullName}</strong>
          <span>@khoanguyent1qh</span>
        </ProfileData>
        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
