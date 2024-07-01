import http from '@/apis';
import { InfoTopic } from '@dto/topics/InfoTopic.dto';
import { TopicCategory } from '@enums/topic.enum';

class TopicService {
  prefix = 'topics';

  public async getTopics(): Promise<InfoTopic[]> {
    // const result = await http.get(`${this.prefix}/`);
    // return result.data.result;
    return [
      { 
        id: 0,
        name: 'Science & Technology',
        tag: 'science-technology',
        categories: [TopicCategory.Science]
      },
      { 
        id: 1,
        name: 'Culture & Art',
        tag: 'culture-art',
        categories: [TopicCategory.Culture]
      },
      {
        id: 2,
        name: 'Politics',
        tag: 'politics',
        categories: [TopicCategory.Politics]
      },
      { 
        id: 3,
        name: 'Economics & Finance',
        tag: 'economic-finance',
        categories: [TopicCategory.Economy]
      },
      { 
        id: 4, 
        name: 'Sports', 
        tag: 'sports', 
        categories: [TopicCategory.Sports] 
      },
      { 
        id: 5, 
        name: 'EURO 2024', 
        tag: 'euro-2024', 
        categories: [TopicCategory.Sports] 
      },
      { 
        id: 6, 
        name: 'Education', 
        tag: 'education', 
        categories: [TopicCategory.Education] 
      },
      { 
        id: 7, 
        name: 'Entertainment', 
        tag: 'entertainment', 
        categories: [TopicCategory.Entertainment] 
      },
      { 
        id: 8, 
        name: 'Celebrity', 
        tag: 'celebrity', 
        categories: [TopicCategory.Lifestyle] 
      },
      { 
        id: 9, 
        name: 'AI', 
        tag: 'ai', 
        categories: [TopicCategory.Technology] 
      },
      { 
        id: 10, 
        name: 'Archaeology', 
        tag: 'archaeology', 
        categories: [TopicCategory.History]
      },
      { 
        id: 11, 
        name: 'Russia-Ukraine war', 
        tag: 'russia-ukraine-war', 
        categories: [TopicCategory.Politics] 
      },
      { 
        id: 12, 
        name: 'The Boys TV Show', 
        tag: 'the-boys-tv-show', 
        categories: [TopicCategory.Entertainment] 
      },
      { 
        id: 13, 
        name: 'Travelling', 
        tag: 'travelling', 
        categories: [TopicCategory.World, TopicCategory.Lifestyle, TopicCategory.Culture] 
      },
      { 
        id: 14, 
        name: 'US President Election', 
        tag: 'us-president-election', 
        categories: [TopicCategory.Politics] 
      },
      { 
        id: 15, 
        name: 'Family', 
        tag: 'family', 
        categories: [TopicCategory.Society] 
      },
    ];
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
