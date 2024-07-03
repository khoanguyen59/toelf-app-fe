import http from '@/apis';
import { DUMMY_TOPICS } from '@/dummyData/topic/topics';
import { PROFILE_USER } from '@/dummyData/user/profileUser';
import { PaginationRequest, PaginationResult } from '@dto/commons/PaginationRequest.dto';
import { InfoTopic } from '@dto/topics/InfoTopic.dto';

class TopicService {
  prefix = 'topics';

  public async getTopics(query?: PaginationRequest): Promise<PaginationResult<InfoTopic>> {
    // const result = await http.get(`${this.prefix}/`);
    // return result.data.result;
    const unselectedTopics = DUMMY_TOPICS.filter((topic) => {
      return !PROFILE_USER.topics.map((t) => t.tag).includes(topic.tag);
    });
    const result = unselectedTopics.slice(query.skip, query.skip + query.take);
    return {
      data: result,
      count: result.length
    };
  }
}

export default new TopicService();
