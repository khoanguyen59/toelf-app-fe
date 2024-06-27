import { styled } from '@mui/material/styles';

export const Body = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '57px 24px 200px',
  marginTop: '3px',
  '> div + div': {
    marginTop: '15px',
  },
}));

export const LoginButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  top: '2vw',
  right: '7px',
  padding: '4px 16px',
  fontSize: '13px',
  '@media (min-width: 320px)': {
    top: '10px',
    padding: '10px 19px',
    fontSize: '15px',
  }
}));

export const Item = styled('div')(({ theme }) => ({
  margin: '0 auto',
  padding: '10px 16px',
  '&:first-child': {
    paddingTop: '13px',
  },
  '&:last-child': {
    paddingBottom: '17px',
  }
}));
