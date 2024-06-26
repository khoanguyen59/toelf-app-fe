import { styled } from '@mui/material/styles';
import {
  Home,
  Search,
  Notifications,
  Email,
} from '../../../styles/Icons';

export const BottomMenu = styled('div')(({ theme }) => ({
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
}));

export const HomeIcon = styled(Home)(({ theme }) => ({
  width: '31px',
  height: '31px',
  cursor: 'pointer',
  fill: 'var(--gray)',
  '&:hover, &.active': {
    fill: 'var(--twitter)',
  }
}));

export const SearchIcon = styled(Search)(({ theme }) => ({
  width: '31px',
  height: '31px',
  cursor: 'pointer',
  fill: 'var(--gray)',
  '&:hover, &.active': {
    fill: 'var(--twitter)',
  }
}));

export const BellIcon = styled(Notifications)(({ theme }) => ({
  width: '31px',
  height: '31px',
  cursor: 'pointer',
  fill: 'var(--gray)',
  '&:hover, &.active': {
    fill: 'var(--twitter)',
  }
}));

export const EmailIcon = styled(Email)(({ theme }) => ({
  width: '31px',
  height: '31px',
  cursor: 'pointer',
  fill: 'var(--gray)',
  '&:hover, &.active': {
    fill: 'var(--twitter)',
  }
}));
