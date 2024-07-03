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
import { DEFAULT_PAGE_SIZE, FIRST_LOAD_SIZE } from '@/constants/pagination.constants';
import { useStore } from '@/RootStoreProvider';
import { PaginationRequest } from '@dto/commons/PaginationRequest.dto';
import { useEffect, useState } from 'react';
import { theme } from '@/themes/MolunderTheme';

const DEFAULT_QUERY: PaginationRequest<InfoTopic> = {
  skip: 0,
  take: FIRST_LOAD_SIZE,
  search: '',
  orderBy: 'name',
  orderDirection: 'ASC',
};

interface ComponentProps {}

const TopicChips = (props: ComponentProps) => {
  const [query, setQuery] = React.useState<PaginationRequest<InfoTopic>>({
    ...DEFAULT_QUERY,
  });

  const { topicStore, userStore } = useStore();
  const { topics, topicCount } = topicStore;
  const { profileUser } = userStore;
  const [selectedTopics, setSelectedTopics] = useState<InfoTopic[]>([]);

  useEffect(() => {
    topicStore.getTopics(query);
    userStore.getUser();
  }, [query]);

  useEffect(() => {
    setSelectedTopics(profileUser?.topics || [])
  }, [profileUser]);

  const loadMoreTopics = () => {
    setQuery({
      ...query,
      skip: topicCount,
      take: DEFAULT_PAGE_SIZE,
    });
  }

  const handleSelectTopic = (topic: InfoTopic) => {
    setSelectedTopics([...selectedTopics, topic]);
  };

  const handleUnselectTopic = (topic: InfoTopic) => {
    setSelectedTopics(selectedTopics.filter((st) => st.tag !== topic.tag ));
  };

  return (
    <Container>
      <Item>
        <Title>Discover new topics</Title>
      </Item>
      <PaperWrapper>
        {topics
          .filter((topic) => !selectedTopics.map((st) => st.tag).includes(topic.tag))
          .map((topic) => {
            const icon = getIconByTopic(topic);
            return (
              <ListItem key={topic.tag}>
                <TopicChip
                  icon={<SvgIcon component={icon} />}
                  label={topic.name}
                  onClick={() => handleSelectTopic(topic)}
                />
              </ListItem>
            );
        })}
        <ListItem key={'more'}>
          <TopicChip
            icon={<TagFacesIcon />}
            label={'Show more...'}
            onClick={loadMoreTopics}
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
                handleEndButtonClick={() => handleUnselectTopic(selectedTopic)}
              />
            );
          })}
        </List>
      </PaperWrapper>
    </Container>
  );
};

export default observer(TopicChips);
