import UserStore from '@/stores/user.store';
import LanguageStore from '@/stores/language.store';
import AuthenticationStore from '@/stores/authentication.store';
import TopicStore from './topic.store';
import LectureStore from './lecture.store';
import SearchStore from './search.store';

class RootStore {
  userStore: UserStore;
  languageStore: LanguageStore;
  authenticationStore: AuthenticationStore;
  topicStore: TopicStore;
  lectureStore: LectureStore;
  searchStore: SearchStore;

  constructor() {
    this.userStore = new UserStore();
    this.languageStore = new LanguageStore();
    this.authenticationStore = new AuthenticationStore();
    this.topicStore = new TopicStore();
    this.lectureStore = new LectureStore();
    this.searchStore = new SearchStore();
  }
}

export default RootStore;
