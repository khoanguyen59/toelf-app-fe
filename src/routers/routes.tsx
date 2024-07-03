import { MenuNames } from '@/routers/RouteCategoryName.enum';
import React, { ComponentType } from 'react';
import { matchPath } from 'react-router-dom';
import {
  HomeIcon,
  ExploreIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ListIcon,
  ProfileIcon,
} from '@components/menus/MenuBar/styles';
export interface CustomRoute {
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

export interface SideBarMenu {
  name: MenuNames;
  icon: React.ReactElement;
  path?: string;
}

export const sideBarMenus: SideBarMenu[] = [
  {
    name: MenuNames.HOME,
    icon: <HomeIcon />,
    path: '/home',
  },
  {
    name: MenuNames.LECTURES,
    icon: <ExploreIcon />,
    path: '/lectures',
  },
  {
    name: MenuNames.NOTIFICATIONS,
    icon: <BellIcon />,
  },
  {
    name: MenuNames.MESSAGES,
    icon: <EmailIcon />,
  },
  {
    name: MenuNames.BOOKMARKS,
    icon: <FavoriteIcon />,
    path: '/bookmarks',
  },
  {
    name: MenuNames.TOPICS,
    icon: <ListIcon />,
    path: '/topics',
  },
  {
    name: MenuNames.PROFILE,
    icon: <ProfileIcon />,
    path: '/profile',
  }
];

export const guardRoutes: CustomRoute[] = [
  {
    path: '/lectures',
    name: MenuNames.LECTURES,
    title: 'Lectures',
    exact: true,
    component: React.lazy(() => import('@/pages/home/Lectures')),
    isLayout: false,
    isMenu: true,
    isMobileMenu: false,
    isGuarded: true,
  },
  {
    path: '/bookmarks',
    name: MenuNames.BOOKMARKS,
    title: 'Bookmarks',
    exact: true,
    component: React.lazy(() => import('@/pages/home/Bookmarks')),
    isLayout: false,
    isMenu: true,
    isMobileMenu: false,
    isGuarded: true,
  },
  {
    path: '/topics',
    name: MenuNames.TOPICS,
    title: 'Select your favirte topics',
    exact: true,
    component: React.lazy(() => import('@/pages/home/FavoriteTopics')),
    isLayout: false,
    isMenu: true,
    isMobileMenu: false,
    isGuarded: true,
  },
  {
    path: '/profile',
    name: MenuNames.HOME,
    title: 'Home',
    exact: false,
    component: React.lazy(() => import('@/pages/home/Profile')),
    isLayout: false,
    isMenu: true,
    isMobileMenu: false,
    isGuarded: true,
  },
  {
    path: '/home',
    name: MenuNames.HOME,
    title: 'Home',
    exact: false,
    component: React.lazy(() => import('@/pages/home/Profile')),
    isLayout: false,
    isMenu: true,
    isMobileMenu: false,
    isGuarded: true,
  },
];

export const defaultRoutes: CustomRoute[] = [
  {
    path: '/sign-in',
    name: MenuNames.LOGIN,
    title: 'Sign in',
    exact: false,
    component: React.lazy(() => import('@/pages/account/Login')),
    isLayout: false,
    isMenu: false,
    isMobileMenu: false,
    isGuarded: false,
  },
];

export const publicRoutes: CustomRoute[] = [];

export const currentRoute = () => {
  return guardRoutes.find((route) =>
    matchPath(window.location.pathname, route.path)
  );
};
