import { SvgIcon } from '@mui/material';
import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  icon?: any;
  imgSrc?: string;
  label: string;
  subLabel: string;
  endText?: string;
}

const FollowSuggestion: React.FC<Props> = ({ icon, imgSrc, label, subLabel, endText }) => {
  console.log(icon);
  return (
    <Container>
      <div>
        <Avatar>
          {icon
            ? <SvgIcon component={icon} sx={{ fontSize: 40, marginRight: '10px' }} />
            : <img src={imgSrc || require('../../../assets/avatar.png')} alt="Avatar" />}
        </Avatar>
        <Info>
          <strong>{label}</strong>
          <span>{subLabel}</span>
        </Info>
      </div>
      <FollowButton outlined>{endText || 'Follow'}</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
