import UserStore from '@/stores/user.store';
import LanguageStore from '@/stores/language.store';
import AuthenticationStore from '@/stores/authentication.store';

class RootStore {
  userStore: UserStore;
  languageStore: LanguageStore;
  authenticationStore: AuthenticationStore;

  constructor() {
    this.userStore = new UserStore();
    this.languageStore = new LanguageStore();
    this.authenticationStore = new AuthenticationStore();
  }
}

export default RootStore;
