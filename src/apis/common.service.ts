import http from '@/apis';

class CommonService {
  public async testOffineMode() {
    const result = await http.get(`/`);
    return result.data.result;
  }
}

export default new CommonService();
