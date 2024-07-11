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
  suggestedLectures: InfoLectureExtended[];
  searchedLectures: InfoLecture[];

  constructor() {
    this.lectures = [];
    this.lectureCount = 0;
    this.bookmarks = [];
    this.bookmarkCount = 0;
    this.suggestedLectures = [];
    this.searchedLectures = [];

    makeObservable(this, {
      lecture: observable,
      lectures: observable,
      lectureCount: observable,
      bookmarks: observable,
      bookmarkCount: observable,
      suggestedLectures: observable,
      searchedLectures: observable,
      getLecture: action,
      getLectures: action,
      getBookmarks: action,
      getSuggestedLectures: action,
    });
  }

  async getLecture(lectureId: number): Promise<void> {
    const data = await lectureService.getLecture(lectureId);
    this.lecture = data;
  }

  async getLectures(query?: PaginationRequest<InfoLectureExtended>): Promise<void> {
    const { data, count } = await lectureService.getLectures(query);
    if (query.skip === 0) {
      this.lectures = [];
      this.lectureCount = 0;
    }
    this.lectures = this.lectures.concat(data);
    this.lectureCount += count; 
  }

  async getBookmarks(query?: PaginationRequest<InfoBookmark>): Promise<void> {
    const { data, count } = await lectureService.getBookmarks(query);
    if (query.skip === 0) {
      this.bookmarks = [];
      this.bookmarkCount = 0;
    }
    this.bookmarks = this.bookmarks.concat(data);
    this.bookmarkCount += count; 
  }

  async getSuggestedLectures(query?: PaginationRequest<InfoLectureExtended>): Promise<void> {
    const data = await lectureService.getSuggestedLectures(query);
    this.suggestedLectures = data;
  }
}

export default LectureStore;
