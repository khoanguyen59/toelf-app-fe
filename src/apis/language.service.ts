import http from '@/apis';

class LanguageService {
  prefix = 'languages';
  prefixAdmin = this.prefix;

  public async getPrivacyPolicy(language?: string): Promise<any> {
    const url = `${this.prefix}/privacy-policy/${language}`;
    const response = await http.get(url);
    return response.data.result;
  }

  public async getUseOfCookies(language?: string): Promise<any> {
    const url = `${this.prefix}/use-of-cookies/${language}`;
    const response = await http.get(url);
    return response.data.result;
  }
}

export default new LanguageService();
