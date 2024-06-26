import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import List from '@components/common/List';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '100%',
  overflowY: 'auto',
  scrollbarWidth: 'none',
  '*::-webkit-scrollbar': {
    width: '0.4em',
    display: 'none',
  },
}));

export const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export const TopicChip = styled(Chip)(({ theme }) => ({
  background: 'transparent',
  color: 'var(--twitter)',
  border: '1px solid var(--twitter)',
  padding: '16px',
  borderRadius: '25px',
  fontWeight: 'bold',
  fontSize: '15px',
  cursor: 'pointer',
  outline: 0,
  '&:hover': {
    background: 'var(--twitter)',
    color: 'var(--secondary)',
  }
}));

export const TopicList = styled(List)(({ theme }) => ({
  'div': {
    width: '-webkit-fill-available',
  },
}));

export const PaperWrapper = styled('ul')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  listStyle: 'none',
  p: 0.5,
  m: 0,
  padding: '10px 16px 0',
  height: '100%'
}));

export const Item = styled('div')(({ theme }) => ({
  margin: '0 auto',
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