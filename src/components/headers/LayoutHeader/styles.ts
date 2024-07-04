import { styled } from '@mui/material/styles';
import {
  ArrowLeft,
} from '../../../styles/Icons';

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
