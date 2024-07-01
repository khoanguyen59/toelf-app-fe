import userService from '@/apis/user.service';
import { action, makeObservable, observable } from 'mobx';
import { toast } from 'react-toastify';
import { InfoTopic } from '@dto/topics/InfoTopic.dto';
import topicService from '@/apis/topic.service';

class TopicStore {
  topics: InfoTopic[];
  selectedTopics: InfoTopic[];

  constructor() {
    this.topics = [];
    this.selectedTopics = [];

    makeObservable(this, {
      topics: observable,
      selectedTopics: observable,
      getTopics: action,
      getSelectedTopicsByUser: action,
    });
  }

  async getTopics(): Promise<void> {
    const data = await topicService.getTopics();
    this.topics = data;
  }

  async getSelectedTopicsByUser(userId: number): Promise<void> {
    const data = await topicService.getSelectedTopicsByUser(userId);
    this.selectedTopics = data;
  }
}

export default TopicStore;
