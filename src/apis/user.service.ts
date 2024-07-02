import http from '@/apis';
import { CreateUser } from '@/dto/users/CreateUser.dto';
import { InfoUser } from '@/dto/users/InfoUser.dto';
import { PROFILE_USER } from '@/dummyData/user/profileUser';

class UserService {
  prefix = 'users';
  prefixAdmin = 'admin/' + this.prefix;

  public async getUser(): Promise<InfoUser> {
    // const result = await http.get(`${this.prefix}/`);
    // return result.data.result;
    return PROFILE_USER;
  }

  public async getUserById(id: number): Promise<InfoUser> {
    // const result = await http.get(`${this.prefixAdmin}/${id}`);
    // return result.data.result;
    return PROFILE_USER;
  }

  public async updateUser(userInfo: InfoUser): Promise<boolean> {
    const result = await http.put(`${this.prefix}/`, userInfo);
    return result.data.result;
  }

  public async updateAnotherUser(userInfo: InfoUser): Promise<boolean> {
    const result = await http.put(`${this.prefixAdmin}/`, userInfo);
    return result.data.result;
  }

  public async registerUser(model: CreateUser): Promise<boolean> {
    const result = await http.post(`${this.prefix}`, model);
    return result.data.result;
  }

  public async getUsersByCompany(companyId: number): Promise<InfoUser[]> {
    const result = await http.get(`${this.prefix}/company/${companyId}`);
    return result.data.result;
  }
}

export default new UserService();
