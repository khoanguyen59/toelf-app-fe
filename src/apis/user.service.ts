import http from '@/apis';
import { InfoUser } from '@/dto/users/InfoUser.dto';
import { PROFILE_USER } from '@/dummyData/user/profileUser';
import { RegisterUser } from '@dto/users/RegisterUser.dto';

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

  public async registerUser(model: RegisterUser): Promise<boolean> {
    const result = await http.post(`${this.prefix}`, model);
    return result.data.result;
  }

  public async updateUser(userInfo: InfoUser): Promise<boolean> {
    const result = await http.put(`${this.prefix}/`, userInfo);
    return result.data.result;
  }

  public async updateUserBookmarks(bookmarkIds: number[]): Promise<boolean> {
    // const result = await http.put(`${this.prefix}/bookmarks`, bookmarkIds);
    // return result.data.result;
    return true;
  }
}

export default new UserService();
