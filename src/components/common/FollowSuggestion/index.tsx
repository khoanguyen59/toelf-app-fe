import { SvgIcon } from '@mui/material';
import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  icon?: any;
  imgSrc?: string;
  label: any;
  subLabel: any;
  endText?: string;
  handleEndButtonClick?: () => void;
}

const FollowSuggestion: React.FC<Props> = ({ icon, imgSrc, label, subLabel, endText, handleEndButtonClick }) => {
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
      <FollowButton outlined onClick={handleEndButtonClick}>{endText || 'Follow'}</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
