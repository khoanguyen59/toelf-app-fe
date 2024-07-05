import React from 'react';
import List from '../../common/List';
import FollowSuggestion from '../../common/FollowSuggestion';
import News from '../../common/News';

import {
  Container,
  SearchWrapper,
  SearchIcon,
  Body,
} from './styles';
import { SearchInput } from '@components/common/SearchInput';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Topics, Lecture,..." />
        <SearchIcon />
      </SearchWrapper>

      {/* <StickyBox> */}
        <Body>
          {/* <List
            title="You might like"
            elements={[
              <FollowSuggestion label="Wuldku Kizon" subLabel="@wkizon" />,
              <FollowSuggestion label="Oriny Figash" subLabel="@OrinyFi22" />,
              <FollowSuggestion label="Maxe Nenial" subLabel="@maxe_nenial" />,
            ]}
          /> */}

          <List
            title='Suggested lectures'
            elements={[
              <News
                header="News · Trading"
                topic="Black Lives Matter"
                link="https://maroon-prod.s3.amazonaws.com/media/photos/2020/06/17/blm_sign.png"
              />,
              <News
                header="Entertainment · Trading"
                topic="New reality show"
                link="data:image/jpeg;base64,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"
              />,
              <News header="Brazil · 3 hours ago" topic="He's gone again" />,
            ]}
          />
        </Body>
      {/* </StickyBox> */}
    </Container>
  );
};

export default SideBar;
