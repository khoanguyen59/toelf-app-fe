import * as React from 'react';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import {
  Container,
  ListItem,
  TopicChip,
  PaperWrapper,
  Item,
} from './styles';
import { List, SvgIcon } from '@mui/material';
import FollowSuggestion from '@components/common/FollowSuggestion';
import { Title } from '@components/common/Title';
import { getIconByTopic, InfoTopic } from '@dto/topics/InfoTopic.dto';
import { observer } from 'mobx-react';

interface ComponentProps {
  topics: InfoTopic[];
  selectedTopics?: InfoTopic[];
}

const TopicChips = (props: ComponentProps) => {
  const { topics, selectedTopics } = props;
  // const handleDelete = (chipToDelete: ChipData) => () => {
  //   setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  // };

  return (
    <Container>
      <Item>
        <Title>Discover new topics</Title>
      </Item>
      <PaperWrapper>
        {topics.map((topic) => {
          let icon = getIconByTopic(topic);

          return (
            <ListItem key={topic.tag}>
              <TopicChip
                icon={<SvgIcon component={icon} />}
                label={topic.name}
              />
            </ListItem>
          );
        })}
        <ListItem key={'more'}>
          <TopicChip
            icon={<TagFacesIcon />}
            label={'Show more...'}
          />
        </ListItem>
      </PaperWrapper>
      <Item>
        <Title>Your topics</Title>
      </Item>
      <PaperWrapper>
        <List sx={{ width: '100%', bgcolor: 'transparent' }}>
          {selectedTopics.map((selectedTopic) => {
            let icon = getIconByTopic(selectedTopic);  
            return (
              <FollowSuggestion
                icon={icon}
                label={selectedTopic.name}
                subLabel={`#${selectedTopic.tag}`}
                endText={'Unfollow'}
              />
            );
          })}
        </List>
      </PaperWrapper>
    </Container>
  );
};

export default observer(TopicChips);
