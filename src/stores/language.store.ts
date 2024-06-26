import { observable, action, makeObservable } from 'mobx';
import { LANGUAGE } from '@/enums/lang.enum';
import languageService from '@/apis/language.service';

class LanguageStore {
  activeLanguage: LANGUAGE;
  useOfCookies: string;
  privacyPolicy: string;

  setActiveLanguage = (value: LANGUAGE) => {
    this.activeLanguage = value;
  };

  getUseOfCookies = async (language: LANGUAGE) => {
    const localizedUseOfCookies = await languageService.getUseOfCookies(
      language
    );
    this.useOfCookies = localizedUseOfCookies;
    return localizedUseOfCookies;
  };

  getPrivacyPolicy = async (language: LANGUAGE) => {
    const localizedPrivacyPolicy = await languageService.getPrivacyPolicy(
      language
    );
    this.privacyPolicy = localizedPrivacyPolicy;
    return localizedPrivacyPolicy;
  };

  constructor() {
    this.activeLanguage =
      (process.env.REACT_APP_DEFAULT_LANG as LANGUAGE) || LANGUAGE.ENGLISH;
    this.useOfCookies = '';
    this.privacyPolicy = '';

    makeObservable(this, {
      activeLanguage: observable,
      useOfCookies: observable,
      privacyPolicy: observable,
      setActiveLanguage: action,
      getUseOfCookies: action,
      getPrivacyPolicy: action,
    });
  }
}

export default LanguageStore;
