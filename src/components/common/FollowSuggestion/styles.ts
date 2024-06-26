import { styled } from '@mui/material/styles';
import Button from '../Button';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '> div': {
    display: 'flex',
    alignItems: 'center',
  }
}));

export const Avatar = styled('div')(({ theme }) => ({
  'img': {
    width: '49px',
    height: '49px',
    background: 'var(--gray)',
    borderRadius: '50%',
    marginRight: '10px',
  }
}));

export const Info = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  '> strong': {
    fontSize: '14px',
  },
  '> span': {
    fontSize: '14px',
    color: 'var(--gray)',
  }
}));

export const FollowButton = styled(Button)(({ theme }) => ({
  padding: '6px 17px',
}));
