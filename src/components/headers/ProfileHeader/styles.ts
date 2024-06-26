import { styled } from '@mui/material/styles';
import {
  ArrowLeft,
} from '../../../styles/Icons';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: 'min(601px, 100%)',
  '@media (min-width: 500px)': {
    borderLeft: '1px solid var(--outline)',
    borderRight: '1px solid var(--outline)',
  }
}));

export const Header = styled('div')(({ theme }) => ({
  zIndex: 2,
  position: 'sticky',
  top: 0,
  background: 'var(--primary)',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'left',
  padding: '8px 0 9px 13px',
  borderBottom: '1px solid var(--outline)',
  '> button': {
    padding: '8px',
    borderRadius: '50%',
    outline: 0,
    cursor: 'pointer',
    '&:hover': {
      background: 'var(--twitter-dark-hover)',
    }
  }
}));

export const BackIcon = styled(ArrowLeft)(({ theme }) => ({
  width: '24px',
  height: '24px',
  fill: 'var(--twitter)',
}));

export const ProfileInfo = styled('div')(({ theme }) => ({
  marginLeft: '17px',
  display: 'flex',
  flexDirection: 'column',
  '> strong': {
    fontSize: '19px',
  },
  '> span': {
    fontSize: '15px',
    color: 'var(--gray)',
  }
}));
