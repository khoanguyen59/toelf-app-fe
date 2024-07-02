import { useStore } from '@/RootStoreProvider';
import { InfoUser } from '@dto/users/InfoUser.dto';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { BackIcon, Header, ProfileInfo } from './styles';


const ProfileHeader: React.FC = () => {
  const { userStore } = useStore();
  const { profileUser } = userStore;

  useEffect(() => {
    userStore.getUser();
  }, []);
  
  return (
    <Header>
      <button>
        <BackIcon />
      </button>

      <ProfileInfo>
        <strong>{profileUser?.fullName}</strong>
        {/* <span>{`${numberOfTweets} Tweets`}</span> */}
      </ProfileInfo>
    </Header>
  );
};

export default observer(ProfileHeader);
