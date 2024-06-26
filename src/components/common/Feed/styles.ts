import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const Tab = styled('div')(({ theme }) => ({
  marginTop: '10px',
  padding: '11px 0 15px',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '15px',
  outline: '0px',
  cursor: 'pointer',
  color: 'var(--twitter)',
  borderBottom: '2px solid var(--twitter)',
  '&:hover': {
    background: 'var(--twitter-dark-hover)',
  }
}));

export const Tweets = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
}));
