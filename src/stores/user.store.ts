import userService from '@/apis/user.service';
import { InfoUser } from '@/dto/users/InfoUser.dto';
import { USER_TYPE, USER_ROLE } from '@/enums/user.enum';
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
      submitProfileForm: action,
      resetProfileForm: action,
      setProfileType: action,
      registerUser: action,
      resetProfileType: action,
    });
  }

  async getUser(): Promise<void> {
    const data = await userService.getUser();
    this.profileUser = data;
  }

  async getUserById(id: number): Promise<void> {
    const data = await userService.getUserById(id);
  }

  registerUser = async (user: InfoUser): Promise<boolean> => {
    const result = userService.registerUser(user);
    return result;
  };

  submitProfileForm = async (
    user: InfoUser,
    ownProfile: boolean,
    regetUser?: boolean
  ): Promise<boolean> => {
    const result = ownProfile
      ? await userService.updateUser(user)
      : await userService.updateAnotherUser(user);
    if (result) {
      if (!!regetUser) {
        this.getUser();
      }
      toast.success('Profile saved');
      return true;
    } else {
      toast.error('Error when saving profile');
      return false;
    }
  };

  resetProfileForm = async (id?: number): Promise<void> => {
    if (id) await this.getUserById(id);
    else await this.getUser();
  };

  setProfileType = (value: USER_TYPE) => {
    this.profileType = value;
  };

  resetProfileType = () => {
    this.profileType = USER_TYPE.PERSON;
  };
}

export default UserStore;
