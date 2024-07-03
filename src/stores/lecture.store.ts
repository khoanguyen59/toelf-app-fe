import { action, makeObservable, observable } from 'mobx';
import { toast } from 'react-toastify';
import { PaginationRequest } from '@dto/commons/PaginationRequest.dto';
import { InfoLecture } from '@dto/lectures/InfoLecture.dto';
import lectureService from '@/apis/lecture.service';

class LectureStore {
  lectures: InfoLecture[];
  lectureCount: number;

  constructor() {
    this.lectures = [];
    this.lectureCount = 0;

    makeObservable(this, {
      lectures: observable,
      lectureCount: observable,
      getLectures: action,
    });
  }

  async getLectures(query?: PaginationRequest): Promise<void> {
    const { data, count } = await lectureService.getLectures(query);
    console.log(data, count);
    this.lectures = this.lectures.concat(data);
    this.lectureCount += count; 
  }
}

export default LectureStore;
