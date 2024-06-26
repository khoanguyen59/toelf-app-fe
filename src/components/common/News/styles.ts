import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  'div': {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    '> span': {
      color: 'var(--gray)',
      marginBottom: '3px',
    }
  },
  'img': {
    height: '60px',
    width: '65px',
    borderRadius: '14px',
  }
}));