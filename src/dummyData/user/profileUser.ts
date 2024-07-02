import { InfoUser } from "@dto/users/InfoUser.dto";
import { TopicCategory } from "@enums/topic.enum";

export const PROFILE_USER: InfoUser = {
  id: 1,
  createdAt: null,
  updatedAt: null,
  email: 'phuongkhoa95ntp@gmail.com',
  phoneNumber: '0944478275',
  fullName: 'Khoa Nguyen',
  topics: [
    { 
      id: 0,
      name: "Science & Technology",
      tag: "science-technology",
      categories: [TopicCategory.Science]
    },
    { 
      id: 1,
      name: "Culture & Art",
      tag: "culture-art",
      categories: [TopicCategory.Culture]
    },
    {
      id: 2,
      name: "Politics",
      tag: "politics",
      categories: [TopicCategory.Politics]
    },
    { 
      id: 3,
      name: "Economics & Finance",
      tag: "economic-finance",
      categories: [TopicCategory.Economy]
    },
    { 
      id: 5, 
      name: "EURO 2024", 
      tag: "euro-2024", 
      categories: [TopicCategory.Sports] 
    },
  ],
}