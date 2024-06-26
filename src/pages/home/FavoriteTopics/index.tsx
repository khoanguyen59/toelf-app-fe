import Main from '@components/twitter/Main';
import MenuBar from '@components/twitter/MenuBar';
import { Container } from '@components/twitter/MenuBar/styles';
import { Wrapper } from '@components/twitter/Sample/styles';
import SideBar from '@components/twitter/SideBar';
import { observer } from 'mobx-react';
import React from 'react';

const FavoriteTopics = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default observer(FavoriteTopics);
