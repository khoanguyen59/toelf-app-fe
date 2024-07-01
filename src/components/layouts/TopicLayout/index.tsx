import React from 'react';
import TopicChips from '../../topic/TopicChips';
import ProfileHeader from '@components/headers/ProfileHeader';
import BottomNavigationMenu from '@components/menus/BottomNavigationMenu';
import { LayoutContainer } from '@components/common/LayoutContainer';
import { InfoTopic } from '@dto/topics/InfoTopic.dto';
import { observer } from 'mobx-react';

interface ComponentProps {
  topics: InfoTopic[];
  selectedTopics: InfoTopic[];
}

const TopicLayout = (props: ComponentProps) => {
  const { topics, selectedTopics } = props; 
  return (
    <LayoutContainer>
      <ProfileHeader name={'Elton Lazzarin'} numberOfTweets={432}/>
      <TopicChips 
        topics={topics}
        selectedTopics={selectedTopics}
      />
      <BottomNavigationMenu />
    </LayoutContainer>
  );
};

export default observer(TopicLayout);
