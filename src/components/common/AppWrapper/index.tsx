import { styled } from '@mui/material/styles';

export const AppWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
}));

export const AppWrapperRight = styled('div')(({ theme }) => ({
  height: '100%',
  maxWidth: '1280px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'end',
}));
