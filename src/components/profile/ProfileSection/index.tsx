import { InfoUser } from '@dto/users/InfoUser.dto';
import React from 'react';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

interface ComponentProps {
  profileUser: InfoUser;
}

const ProfileSection = (props: ComponentProps) => {
  const { profileUser } = props;
  return (
    <Container>
      <Banner>
        <Avatar>
          <img
            src='https://avatars.githubusercontent.com/u/44763499?s=400&u=800d425529ae859a491de74413fd6a5f6abff9f6&v=4'
            alt="Elton Lazzarin"
          />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Set up profile</EditButton>

        <h1>{profileUser?.fullName}</h1>
      </ProfileData>
    </Container>
  );
};

export default ProfileSection;
