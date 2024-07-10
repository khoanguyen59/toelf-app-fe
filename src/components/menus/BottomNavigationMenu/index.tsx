import { MenuNames } from '@/routers/RouteCategoryName.enum';
import { SideBarMenu } from '@/routers/routes';
import { Box, IconButton } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';

const bottomMenus: SideBarMenu[] = [
  {
    name: MenuNames.LECTURES,
    icon: <MenuBookOutlinedIcon />,
    path: '/lectures',
  },
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

const BottomNavigationMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        zindex: 2,
        background: 'var(--primary)',
        width: '100%',
        borderTop: '1px solid var(--outline)',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px min(46px, max(10vw, 10px))',
        '@media (min-width: 500px)': {
          display: 'none',
        }
      }}
    >
      {bottomMenus.map((menu: SideBarMenu, index) => {
        const isMenuSelected = location.pathname === menu.path;
        return <IconButton
          onClick={() => navigate(menu.path || '/home')}
          key={index}
          sx={{ 
            '.MuiSvgIcon-root': {
              width: '28px',
              height: '28px',
              fill: isMenuSelected ? 'var(--twitter)' : 'default',
            },
            padding: '4px',
          }}
        >
          {menu.icon}
        </IconButton>
      })}
    </Box>
  );
};

export default BottomNavigationMenu;
