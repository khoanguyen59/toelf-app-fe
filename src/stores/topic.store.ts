import userService from '@/apis/user.service';
import { action, makeObservable, observable } from 'mobx';
import { toast } from 'react-toastify';
import { InfoTopic } from '@dto/topics/InfoTopic.dto';
import topicService from '@/apis/topic.service';
import { PaginationRequest } from '@dto/commons/PaginationRequest.dto';

class TopicStore {
  topics: InfoTopic[];
  topicCount: number;
  selectedTopics: InfoTopic[];

  constructor() {
    this.topics = [];
    this.selectedTopics = [];
    this.topicCount = 0;

    makeObservable(this, {
      topics: observable,
      selectedTopics: observable,
      topicCount: observable,
      getTopics: action,
      getSelectedTopicsByUser: action,
    });
  }

  async getTopics(query?: PaginationRequest): Promise<void> {
    const { data, count } = await topicService.getTopics(query);
    this.topics = this.topics.concat(data);
    this.topicCount += count; 
  }

  async getSelectedTopicsByUser(userId: number): Promise<void> {
    const data = await topicService.getSelectedTopicsByUser(userId);
    this.selectedTopics = data;
  }
}

export default TopicStore;
