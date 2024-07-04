import { styled } from '@mui/material/styles';

import { ChatBubbleLeft, Retweet, Favorite } from '../../../styles/Icons';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '14px 16px',
  borderBottom: '1px solid var(--outline)',
  maxWidth: '100%',
  cursor: 'pointer',
  '&:hover': {
    background: 'var(--twitter-dark-hover)'
  }
}));

export const Retweeted = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: '13px',
  color: 'var(--gray)',
}));

export const RocketseatIcon = styled(Retweet)(({ theme }) => ({
  width: '16px',
  height: '16px',
  marginLeft: '35px',
  marginRight: '9px',
  '> path': {
    fill: 'var(--gray)',
  }
}));

export const Body = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: '3px',
  position: 'relative',
}));

export const Avatar = styled('div')(({ theme }) => ({
  'img': {
    width: '49px',
    height: '49px',
    borderRadius: '50%',
    flexShrink: 0,
    background: 'var(--gray)',
    position: 'absolute',
    top: 0,
    left: 0,
  }
}));

export const Content = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: '2px',
  paddingLeft: '29px',
}));

export const Header = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: '15px',
  whiteSpace: 'nowrap',
  '> strong': {
    marginRight: '5px',
    '@media (max-width: 500px)': {
      maxWidth: '200px',
    },
  },
  '> span, time': {
    color: 'var(--gray)',
  },
  '> strong, span': {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }
}));

export const Dot = styled('div')(({ theme }) => ({
  background: 'var(--gray)',
  width: '2px',
  height: '2px',
  margin: '0 10px',
}));

export const Icons = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  margin: '11px auto 0',
  width: '100%',
  '@media (min-width: 330px)': {
    width: '63%',
  },
  '> div': {
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7,
    }
  }
}));

export const Status = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  '> svg': {
    marginRight: '5px',
  },
  '&:nth-child(1)': {
    '&, > svg path': {
      color: 'var(--gray)',
    }
  },
  '&:nth-child(2)': {
    color: 'var(--retweet)',
    '> svg path': {
      fill: 'var(--retweet)'
    }
  },
  '&:nth-child(3)': {
    color: 'var(--like)',
    '> svg': {
      fill: 'var(--like)',
    }
  }
}));

export const CommentIcon = styled(ChatBubbleLeft)(({ theme }) => ({
  width: '19px',
  height: '19px',
}));

export const RetweetIcon = styled(Retweet)(({ theme }) => ({
  width: '19px',
  height: '19px',
}));

export const LikeIcon = styled(Favorite)(({ theme }) => ({
  width: '19px',
  height: '19px',
}));
