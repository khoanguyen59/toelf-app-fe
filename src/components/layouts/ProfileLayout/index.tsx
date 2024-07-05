import { LayoutContainer } from '@components/common/LayoutContainer';
import ProfileHeader from '@components/headers/ProfileHeader';
import BottomNavigationMenu from '@components/menus/BottomNavigationMenu';
import ProfilePage from '@components/profile/ProfileSection';
import { InfoUser } from '@dto/users/InfoUser.dto';
import { observer } from 'mobx-react';
import React from 'react';

interface ComponentProps {
  profileUser: InfoUser;
}

const ProfileLayout = (props: ComponentProps) => {
  const { profileUser } = props;

  return (
    <LayoutContainer>
      <ProfileHeader profileUser={profileUser} />
      <ProfilePage profileUser={profileUser} />
      <BottomNavigationMenu />
    </LayoutContainer>
  );
};

export default observer(ProfileLayout);
