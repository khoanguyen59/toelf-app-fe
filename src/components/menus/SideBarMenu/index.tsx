import { SideBarMenu } from '@/routers/routes';
import { InfoUser } from '@dto/users/InfoUser.dto';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import {
  Container,
  Topside,
  Logo,
  MenuButton,
  Avatar,
  ProfileData,
} from './styles';
import { Box, IconButton, Popover, Typography, Button as MuiButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useStore } from '@/RootStoreProvider';
import { MenuNames } from '@/routers/RouteCategoryName.enum';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';


interface ComponentProps {
  profileUser?: InfoUser;
}

const sideBarMenus: SideBarMenu[] = [
  // {
  //   name: MenuNames.HOME,
  //   icon: <HomeIcon />,
  //   path: '/home',
  // },
  {
    name: MenuNames.LECTURES,
    icon: <MenuBookOutlinedIcon />,
    path: '/lectures',
  },
  // {
  //   name: MenuNames.NOTIFICATIONS,
  //   icon: <BellIcon />,
  // },
  // {
  //   name: MenuNames.MESSAGES,
  //   icon: <EmailIcon />,
  // },
  {
    name: MenuNames.BOOKMARKS,
    icon: <BookmarkAddedOutlinedIcon />,
    path: '/bookmarks',
  },
  {
    name: MenuNames.TOPICS,
    icon: <CategoryOutlinedIcon />,
    path: '/topics',
  },
  {
    name: MenuNames.PROFILE,
    icon: <ManageSearchOutlinedIcon />,
    path: '/profile',
  }
];

const MenuBar = (props: ComponentProps) => {
  const { profileUser } = props;
  const navigate = useNavigate();
  const { authenticationStore } = useStore();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    authenticationStore.logout(navigate);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
      <Box 
        aria-describedby={id}
        sx={{ 
          marginTop: '20px',
          display: 'flex',
          alignItems: 'center',
        }}
        component={MuiButton}
        onClick={open ? handleClose : handleClick}
      >
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          PaperProps={{
            style: { width: '220px' },
          }}
        >
          <MuiButton
            sx={{ background: 'var(--secondary)', width: '100%' }}
            onClick={handleLogout}
          >
            {`Logout`}
          </MuiButton>
        </Popover>
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
        <IconButton>
          {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }
        </IconButton>
      </Box>
    </Container>
  );
};

export default MenuBar;
