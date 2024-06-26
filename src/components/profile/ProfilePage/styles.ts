import { styled } from '@mui/material/styles';
import { LocationOn, Cake } from '../../../styles/Icons';

import Button from '../../common/Button';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '100%',
  overflowY: 'auto',
  scrollbarWidth: 'none',
  '*::-webkit-scrollbar': {
    width: '0.4em'
  },
}));

export const Banner = styled('div')(({ theme }) => ({
  flexShrink: 0,
  width: '100%',
  height: 'min(33vw, 199px)',
  backgroundImage: `url('https://1.bp.blogspot.com/-lg73Nw76yCc/V9_EnSSngLI/AAAAAAAAWxY/bQtB8s4wWPsvzsac3xZYbP--23d-KugzwCLcB/s1600/StarCIO%2BLess%2BCode.jpg')`,
  position: 'relative',
}));

export const Avatar = styled('div')(({ theme }) => ({
  '& img': {
    width: 'max(45px, min(135px, 22vw))',
    height: 'max(45px, min(135px, 22vw))',
    border: '3.75px solid var(--primary)',
    background: 'var(--gray)',
    borderRadius: '50%',
    position: 'absolute',
    bottom: 'max(-60px, -10vw)',
    left: '15px',
  }
}));

export const ProfileData = styled('div')(({ theme }) => ({
  padding: 'min(calc(10vw + 7px), 67px) 16px 0',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  '> h1': {
    fontWeight: 'bold',
    fontSize: '19px',
  },
  '> h2': {
    fontWeight: 'normal',
    fontSize: '15px',
    color: 'var(--gray)',
  },
  '> p': {
    fontSize: '15px',
    marginTop: '11px',
    '> a': {
      textDecoration: 'none',
      color: 'var(--twitter)',
    }
  },
  '> ul': {
    listStyle: 'none',
    marginTop: '10px',
    marginBottom: '10px',
    '> li': {
      fontSize: '15px',
      color: 'var(--gray)',
      '> svg': {
        fill: 'var(--gray)',
        marginRight: '5px',
      }
    }
  }
}));

export const EditButton = styled(Button)(({ theme }) => ({
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

export const LocationIcon = styled(LocationOn)(({ theme }) => ({
  width: '20px',
  height: '20px',
  color: 'var(--gray)',
}));

export const CakeIcon = styled(Cake)(({ theme }) => ({
  width: '20px',
  height: '20px',
  color: 'var(--gray)',
}));

export const Followage = styled('div')(({ theme }) => ({
  display: 'flex',
  '> span': {
    fontSize: '15px',
    color: 'var(--gray)',
    '& + span': {
      marginLeft: '20px',
    }
  }
}));