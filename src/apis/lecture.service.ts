import http from '@/apis';
import { LECTURES } from '@/dummyData/lecture/lectures';
import { PROFILE_USER } from '@/dummyData/user/profileUser';
import { PaginationRequest, PaginationResult } from '@dto/commons/PaginationRequest.dto';
import { InfoBookmark, InfoLecture, InfoLectureExtended } from '@dto/lectures/InfoLecture.dto';

class LectureService {
  prefix = 'lectures';

  public async getLecture(lectureId: number): Promise<InfoBookmark> {
    // const result = await http.get(`${this.prefix}/:id`);
    // return result.data.result;
    const result = LECTURES.find((lecture) => lecture.id === lectureId);
    return result;
  }

  public async getLectures(query?: PaginationRequest<InfoLectureExtended>): Promise<PaginationResult<InfoLecture>> {
    // const result = await http.get(`${this.prefix}/`);
    // return result.data.result;
    const result = LECTURES.slice(query.skip, query.skip + query.take);
    return {
      data: result,
      count: result.length
    };
  }

  public async getBookmarks(query?: PaginationRequest<InfoBookmark>): Promise<PaginationResult<InfoBookmark>> {
    // const result = await http.get(`${this.prefix}/bookmark/:userId`);
    // return result.data.result;
    const bookmarks = LECTURES.filter((lecture) => PROFILE_USER.bookmarkIds.includes(lecture.id));
    const result = bookmarks.slice(query.skip, query.skip + query.take);
    return {
      data: result,
      count: result.length
    };
  }

  public async getSuggestedLectures(query?: PaginationRequest<InfoLectureExtended>): Promise<InfoLectureExtended[]> {
    // const result = await http.get(`${this.prefix}/suggested/:userId`);
    // return result.data.result;
    const result = LECTURES.slice(0, 5);
    return result;
  }
}

export default new LectureService();
