import { InfoQuestion } from '@dto/questions/InfoQuestion.dto';
import { InfoTopic } from '@dto/topics/InfoTopic.dto';
import { TopicCategory } from '@enums/topic.enum';

export interface InfoLecture {
  id?: number;
  name: string;
  summary?: string;
  fullScript?: string;
  topics?: InfoTopic[];
  stringifiedTopics?: string[];
  categories?: TopicCategory[];
  stringifiedCategories?: string[];
  numberOfLikes: number;
  numberOfBookmarks: number;
  numberOfTestsTaken: number;
  createdAt?: Date | string;
  updatedAt?: Date;
  audioFileUrl?: string;
  thumbnailUrl?: string;
  questions?: InfoQuestion[];
  avatar?: string;
  retweet?: boolean;
}
