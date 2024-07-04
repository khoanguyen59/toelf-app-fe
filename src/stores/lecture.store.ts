import { action, makeObservable, observable } from 'mobx';
import { toast } from 'react-toastify';
import { PaginationRequest } from '@dto/commons/PaginationRequest.dto';
import { InfoBookmark, InfoLecture, InfoLectureExtended } from '@dto/lectures/InfoLecture.dto';
import lectureService from '@/apis/lecture.service';

class LectureStore {
  lecture: InfoBookmark | InfoLectureExtended;
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
      lecture: observable,
      lectures: observable,
      lectureCount: observable,
      bookmarks: observable,
      bookmarkCount: observable,
      getLecture: action,
      getLectures: action,
      getBookmarks: action,
    });
  }

  async getLecture(lectureId: number): Promise<void> {
    const data = await lectureService.getLecture(lectureId);
    this.lecture = data;
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
