import { action, makeObservable, observable } from 'mobx';
import { toast } from 'react-toastify';
import { PaginationRequest } from '@dto/commons/PaginationRequest.dto';
import { InfoBookmark, InfoLecture, InfoLectureExtended } from '@dto/lectures/InfoLecture.dto';
import lectureService from '@/apis/lecture.service';

class LectureStore {
  lectures: InfoLecture[];
  lectureCount: number;
  bookmarks: InfoBookmark[];
  bookmarkCount: number;

  constructor() {
    this.lectures = [];
    this.lectureCount = 0;
    this.bookmarks = [];
    this.bookmarkCount = 0;

    makeObservable(this, {
      lectures: observable,
      lectureCount: observable,
      bookmarks: observable,
      bookmarkCount: observable,
      getLectures: action,
      getBookmarks: action,
    });
  }

  async getLectures(query?: PaginationRequest<InfoLectureExtended>): Promise<void> {
    const { data, count } = await lectureService.getLectures(query);
    this.lectures = this.lectures.concat(data);
    this.lectureCount += count; 
  }

  async getBookmarks(query?: PaginationRequest<InfoBookmark>): Promise<void> {
    const { data, count } = await lectureService.getBookmarks(query);
    this.bookmarks = this.bookmarks.concat(data);
    this.bookmarkCount += count; 
  }
}

export default LectureStore;
