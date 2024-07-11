import http from '@/apis';
import { LECTURES } from '@/dummyData/lecture/lectures';
import { DUMMY_TOPICS } from '@/dummyData/topic/topics';
import { SearchResult } from '@dto/search/SearchResult.dto';

class SearchService {
  prefix = 'search';

  public async searchByKeyword(keyword: string): Promise<SearchResult> {
    // const result = await http.get(`${this.prefix}/?keyword=${keyword}`);
    // return result.data.result;
    const lectures = LECTURES.filter((lecture) => lecture.name.includes(keyword));
    const topics = DUMMY_TOPICS.filter((topic) => topic.name.includes(keyword) || topic.categories.join(` `).includes(keyword));
    return { lectures: lectures, topics: topics };
  }
}

export default new SearchService();
