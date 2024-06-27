import { styled } from '@mui/material/styles';

export const LayoutContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: 'min(601px, 100%)',
  '@media (min-width: 500px)': {
    borderLeft: '1px solid var(--outline)',
    borderRight: '1px solid var(--outline)',
  },
  height: '100vw',
}));
