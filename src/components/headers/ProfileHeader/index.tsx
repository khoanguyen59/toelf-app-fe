import React from 'react';
import { BackIcon, Header, ProfileInfo } from './styles';

interface Props {
  name: string;
  numberOfTweets: number;
}

const ProfileHeader: React.FC<Props> = ({ name, numberOfTweets }) => {
  return (
    <Header>
      <button>
        <BackIcon />
      </button>

      <ProfileInfo>
        <strong>{name}</strong>
        <span>{`${numberOfTweets} Tweets`}</span>
      </ProfileInfo>
    </Header>
  );
};

export default ProfileHeader;
