import { InfoBookmark, InfoLecture } from "@dto/lectures/InfoLecture.dto";
import { InfoTopic } from "@dto/topics/InfoTopic.dto";

export interface InfoUser {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  fullName: string;
  phoneNumber: string;
  password?: string;
  isApproved?: boolean;
  topics?: InfoTopic[];
  bookmarks?: InfoBookmark[];
  bookmardIds?: number[];
}

export interface InfoUserWidthCredential extends InfoUser {
  accessToken: string;
  refreshToken: string;
}
