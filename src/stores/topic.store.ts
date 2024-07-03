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
    this.topicCount = 0;

    makeObservable(this, {
      topics: observable,
      topicCount: observable,
      getTopics: action,
    });
  }

  async getTopics(query?: PaginationRequest): Promise<void> {
    const { data, count } = await topicService.getTopics(query);
    this.topics = this.topics.concat(data);
    this.topicCount += count; 
  }
}

export default TopicStore;
