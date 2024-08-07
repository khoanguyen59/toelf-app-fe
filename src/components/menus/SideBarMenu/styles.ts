import { styled } from '@mui/material/styles';
import { KeyboardArrowDown } from '../../../styles/Icons';

export const Container = styled('div')(({ theme }) => ({
  display: 'none',
  '@media (min-width: 500px)': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    left: 0,
    padding: '9px 19px 20px',
    maxHeight: '100vh',
    overflowY: 'auto',
  }
}));

export const Topside = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media (min-width: 1280px)': {
    alignItems: 'flex-start',
  }
}));

export const Logo = styled('div')(({ theme }) => ({
  width: '32px',
  height: '32px',
  '> path': {
    fill: 'var(--twitter)',
  },
  marginBottom: '20px',
}));

export const MenuButton = styled('button')(({ theme }) => ({
  background: 'var(--secondary)',
  width: '-webkit-fill-available',
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  '> span': {
    display: 'none',
  },
  '@media (min-width: 1280px)': {
    '> span': {
      display: 'inline',
      marginLeft: '19px',
      fontWeight: 'bold',
      fontSize: '19px',
    },
    paddingRight: '15px',
  },
  padding: '8.25px 0',
  paddingLeft: '15px',
  outline: 0,
  '& + button': {
    marginTop: '16.5px',
  },
  '& + button:last-child': {
    marginTop: '33px',
    width: '40px',
    height: '40px',
    '> span': {
      display: 'none',
    },
    '@media (min-width: 1280px)': {
      width: '100%',
      height: 'unset',
      '> span': {
        display: 'inline',
      }
    }
  },
  cursor: 'pointer',
  borderRadius: '25px',
  '&:hover': {
    background: 'var(--twitter-dark-hover)',
  },
  '&:hover, &.active': {
    'span, svg': {
      color: 'var(--twitter)',
      fill: 'var(--twitter)',
    }
  }
}));

export const Avatar = styled('div')(({ theme }) => ({
  'img': {
    flexShrink: 0,
    width: '39px',
    height: '39px',
    borderRadius: '50%',
    background: 'var(--gray)',
  }
}));

export const ProfileData = styled('div')(({ theme }) => ({
  display: 'none',
  '@media (min-width: 1280px)': {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px',
    fontSize: '14px',
    '> span': {
      color: 'var(--gray)',
    }
  }
}));

export const ExitIcon = styled(KeyboardArrowDown)(({ theme }) => ({
  display: 'none',
  '@media (min-width: 1280px)': {
    display: 'inline-block',
    width: '25px',
    height: '25px',
    color: 'var(--white)',
    marginLeft: '30px',
    cursor: 'pointer',
    '&:hover': {
      '> path': {
        color: 'var(--like)',
      }
    }
  }
}));
