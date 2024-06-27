import { styled } from '@mui/material/styles';

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