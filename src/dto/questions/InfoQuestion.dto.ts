import { InfoLecture } from "@dto/lectures/InfoLecture.dto";

export interface InfoQuestion {
  id?: number;
  lectureId?: number;
  lecture?: InfoLecture;
  text: string;
  answers: string[];
  correctAnswer: string;
}
