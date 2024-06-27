import http from '@/apis';
import { CreateNewPassword } from '@/dto/users/CreateNewPassword.dto';
import { CreateUser } from '@/dto/users/CreateUser.dto';
import { InfoUserWidthCredential } from '@/dto/users/InfoUser.dto';
import { LoginRequestDto } from '@/dto/users/LoginRequest.dto';
import { UpdateUser } from '@/dto/users/UpdateUser.dto';

class AuthenticateService {
  prefix = 'users';

  public async checkToken(
    accessToken: string,
    refreshToken: string,
  ): Promise<InfoUserWidthCredential | undefined> {
    const result = await http.post(`${this.prefix}/check-token`, {
      accessToken,
      refreshToken,
    });
    return result?.data?.result;
  }

  public async login(model: LoginRequestDto): Promise<InfoUserWidthCredential> {
    const result = await http.post(`${this.prefix}/login`, model);
    return result.data.result;
  }

  public async logout(
    accessToken?: string,
    refreshToken?: string
  ): Promise<boolean> {
    const result = await http.post(`${this.prefix}/logout`, {
      accessToken,
      refreshToken,
    });
    return result.data.result;
  }

  public async registerUser(model: CreateUser): Promise<boolean> {
    const result = await http.post(`${this.prefix}`, model);
    return result.data.result;
  }

  public async updateUser(model: UpdateUser): Promise<boolean> {
    const result = await http.put(`${this.prefix}`, model);
    return result.data.result;
  }

  public async resetPassword(email: string): Promise<boolean> {
    const result = await http.post(`${this.prefix}/forgot-password`, {
      email: email,
    });
    return result.data.result;
  }

  public async createNewPassword(model: CreateNewPassword): Promise<boolean> {
    const result = await http.post(`${this.prefix}/create-new-password`, model);
    return result.data.result;
  }

  public async verifyEmail(token: string): Promise<boolean> {
    const result = await http.post(`${this.prefix}/verify-email`, {
      token: token,
    });
    return result.data.result;
  }
}

export default new AuthenticateService();
