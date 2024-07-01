import UserStore from '@/stores/user.store';
import LanguageStore from '@/stores/language.store';
import AuthenticationStore from '@/stores/authentication.store';
import TopicStore from './topic.store';

class RootStore {
  userStore: UserStore;
  languageStore: LanguageStore;
  authenticationStore: AuthenticationStore;
  topicStore: TopicStore;

  constructor() {
    this.userStore = new UserStore();
    this.languageStore = new LanguageStore();
    this.authenticationStore = new AuthenticationStore();
    this.topicStore = new TopicStore();
  }
}

export default RootStore;
