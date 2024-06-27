import { styled } from '@mui/material/styles';
import { Search } from '../../../styles/Icons';

export const Container = styled('div')(({ theme }) => ({
  display: 'none',
  '@media (min-width: 1000px)': {
    display: 'flex',
    flexDirection: 'column',
    width: 'min(399px, 100%)',
  }
}));

export const SearchWrapper = styled('div')(({ theme }) => ({
  padding: '10px 24px',
  width: 'min(399px, 100%)',
  position: 'fixed',
  top: 0,
  zIndex: 2,
  background: 'var(--primary)',
  maxHeight: '57px',
}));

export const SearchIcon = styled(Search)(({ theme }) => ({
  width: '27px',
  height: '27px',
  fill: 'var(--gray)',
}));

export const Body = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '57px 24px 200px',
  marginTop: '3px',
  '> div + div': {
    marginTop: '15px',
  },
}));
