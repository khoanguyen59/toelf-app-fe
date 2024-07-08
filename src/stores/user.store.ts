import userService from '@/apis/user.service';
import { InfoUser } from '@/dto/users/InfoUser.dto';
import { USER_TYPE, USER_ROLE } from '@/enums/user.enum';
import { RegisterUser } from '@dto/users/RegisterUser.dto';
import { action, makeObservable, observable } from 'mobx';
import { toast } from 'react-toastify';

class UserStore {
  profileType: USER_TYPE;
  userCount: number;
  profileUser: InfoUser;

  constructor() {
    this.profileType = USER_TYPE.PERSON;
    this.userCount = 0;

    makeObservable(this, {
      profileType: observable,
      userCount: observable,
      profileUser: observable,
      getUser: action,
      getUserById: action,
      registerUser: action,
    });
  }

  async getUser(): Promise<void> {
    const data = await userService.getUser();
    this.profileUser = data;
  }

  async getUserById(id: number): Promise<void> {
    const data = await userService.getUserById(id);
  }

  async registerUser(user: RegisterUser): Promise<boolean> {
    const result = userService.registerUser(user);
    return result;
  };
}

export default UserStore;
