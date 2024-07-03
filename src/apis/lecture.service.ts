import http from '@/apis';
import { LECTURES } from '@/dummyData/lecture/lectures';
import { PaginationRequest, PaginationResult } from '@dto/commons/PaginationRequest.dto';
import { InfoLecture } from '@dto/lectures/InfoLecture.dto';

class LectureService {
  prefix = 'lectures';

  public async getLectures(query?: PaginationRequest): Promise<PaginationResult<InfoLecture>> {
    // const result = await http.get(`${this.prefix}/`);
    // return result.data.result;
    const result = LECTURES.slice(query.skip, query.skip + query.take);
    return {
      data: result,
      count: result.length
    };
  }
}

export default new LectureService();
