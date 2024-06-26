import { USER_ROLE } from '@/enums/user.enum';
import { CategoryNames, MenuNames } from '@/routers/RouteCategoryName.enum';
import AddIcon from '@mui/icons-material/Add';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SettingsIcon from '@mui/icons-material/Settings';
import TopicIcon from '@mui/icons-material/Topic';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import React, { ComponentType } from 'react';
import { matchPath } from 'react-router-dom';

export interface CustomRoute {
  category?: CategoryNames;
  path: string;
  name: MenuNames;
  title: string;
  exact: boolean;
  component: ComponentType<any>;
  isLayout: boolean;
  isMenu: boolean;
  isMobileMenu: boolean;
  isGuarded: boolean;
}

export interface RouteCategory {
  name: CategoryNames;
  icon: React.ReactElement;
  dropdown?: boolean;
}

export const routeCategories: RouteCategory[] = [
  {
    name: CategoryNames.MY_PROJECTS,
    icon: <TopicIcon />,
    dropdown: true,
  },
  {
    name: CategoryNames.TRANSACTIONS,
    icon: <CompareArrowsIcon />,
    dropdown: true,
  },
  {
    name: CategoryNames.REGISTER,
    icon: <AddIcon />,
    dropdown: true,
  },
  {
    name: CategoryNames.DECLARATIONS,
    icon: <PlaylistAddIcon />,
    dropdown: true,
  },
  {
    name: CategoryNames.ANALYSIS,
    icon: <SpaOutlinedIcon />,
    dropdown: false,
  },
  {
    name: CategoryNames.SETTINGS,
    icon: <SettingsIcon />,
    dropdown: true,
  },
];

export const guardRoutes: CustomRoute[] = [];

export const defaultRoutes: CustomRoute[] = [
  {
    path: '/favorite-topics',
    name: MenuNames.FAVORITE_TOPICS,
    title: 'Select your favirte topics',
    exact: true,
    component: React.lazy(() => import('@/pages/home/FavoriteTopics')),
    isLayout: false,
    isMenu: false,
    isMobileMenu: false,
    isGuarded: true,
  },
  {
    path: '/',
    name: MenuNames.VISITOR,
    title: 'Visitor',
    exact: false,
    component: React.lazy(() => import('@/pages/home/Sample')),
    isLayout: false,
    isMenu: false,
    isMobileMenu: false,
    isGuarded: true,
  },
];

export const publicRoutes: CustomRoute[] = [];

export const currentRoute = () => {
  return guardRoutes.find((route) =>
    matchPath(window.location.pathname, route.path)
  );
};

export const getRouteByPathname = (pathname: string) => {
  const matchedRoute = guardRoutes.find((route) => matchPath(pathname, route.path));

  return matchedRoute;
};

export const getDefaultRouteByCategory = (category: CategoryNames) => {
  const matchedRoutes = guardRoutes.find(
    (route) => route.category && route.category === category
  );

  return matchedRoutes;
};
