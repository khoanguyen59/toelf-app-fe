import { InfoLecture } from "@dto/lectures/InfoLecture.dto";
import { InfoTopic } from "@dto/topics/InfoTopic.dto";

export interface SearchResult {
  lectures?: InfoLecture[];
  topics?: InfoTopic[];
}