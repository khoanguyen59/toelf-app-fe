import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: 'var(--secondary)',
  borderRadius: '14px',
}));

export const Item = styled('div')(({ theme }) => ({
  padding: '10px 16px',
  '& + div': {
    borderTop: '1px solid var(--outline)',
  },
  '&:first-child': {
    paddingTop: '13px',
  },
  '&:last-child': {
    paddingBottom: '17px',
  }
}));

export const Title = styled('div')(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '19px',
}));