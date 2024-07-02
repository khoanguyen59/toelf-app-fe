import http from '@/apis';
import { DUMMY_TOPICS } from '@/dummyData/topic/topics';
import { PaginationRequest, PaginationResult } from '@dto/commons/PaginationRequest.dto';
import { InfoTopic } from '@dto/topics/InfoTopic.dto';
import { TopicCategory } from '@enums/topic.enum';

class TopicService {
  prefix = 'topics';

  public async getTopics(query?: PaginationRequest): Promise<PaginationResult<InfoTopic>> {
    // const result = await http.get(`${this.prefix}/`);
    // return result.data.result;
    const result = DUMMY_TOPICS.slice(query.skip - 1, query.skip + query.take - 1);
    return {
      data: result,
      count: result.length
    };
  }

  public async getSelectedTopicsByUser(userId: number): Promise<InfoTopic[]> {
    return [
      { id: 0, name: 'Science & Technology', tag: 'science-technology', categories: [TopicCategory.Science] },
      { id: 1, name: 'Culture & Art', tag: 'culture-art', categories: [TopicCategory.Culture] },
      { id: 5, name: 'EURO 2024', tag: 'euro-2024', categories: [TopicCategory.Sports] },
      { id: 7, name: 'Entertainment', tag: 'entertainment', categories: [TopicCategory.Entertainment] },
      { id: 9, name: 'AI', tag: 'ai', categories: [TopicCategory.Technology] },
    ];
  }
}

export default new TopicService();
