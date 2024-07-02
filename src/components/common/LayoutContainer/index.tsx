import { styled } from '@mui/material/styles';

export const LayoutContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: 'min(901px, 100%)',
  height: '100vh',
  '@media (min-width: 500px)': {
    borderLeft: '1px solid var(--outline)',
    borderRight: '1px solid var(--outline)',
  },
  background: 'var(--secondary)',
}));
