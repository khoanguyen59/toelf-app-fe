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

export const SearchInput = styled('input')(({ theme }) => ({
  width: '100%',
  height: '39px',
  fontSize: '14px',
  padding: '0 10px 0 52px',
  borderRadius: '19.5px',
  background: 'var(--search)',
  '&::placeholder': {
    color: 'var(--gray)',
  },
  '~ svg': {
    position: 'relative',
    top: '-33px',
    left: '15px',
    zIndex: 1,
    transition: '180ms ease-in-out',
  },
  outline: 0,
  '&:focus': {
    border: '1px solid var(--twitter)',
    '~ svg': {
      fill: 'var(--twitter)',
    }
  }
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
