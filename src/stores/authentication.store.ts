import authenticateService from '@/apis/authenticate.service';
import { LoginRequestDto } from '@/dto/users/LoginRequest.dto';
import {
  removeFromCookie,
  removeFromStorage,
  retrieveFromCookie,
  retrieveFromStorage,
  saveToCookie,
  saveToStorage,
} from '@utils/storage.util';
import { action, makeObservable, observable } from 'mobx';
import { InfoUserWidthCredential } from '@/dto/users/InfoUser.dto';
import { UpdateUser } from '@/dto/users/UpdateUser.dto';

class AuthenticationStore {
  loggedUser: InfoUserWidthCredential | null;
  loginFormValue: LoginRequestDto;
  loginFormValueInit: LoginRequestDto = {
    email: '',
    password: '',
    rememberMe: false,
  };
  errorLoginFormValue: Record<string, boolean>;
  errorLoginFormValueInit: Record<string, boolean> = {
    email: false,
    password: false,
  };
  accessTokenExpirationTime: number;
  refreshTokenExpirationTime: number;
  redirectUrl: string | null;

  constructor() {
    this.loggedUser = null;
    this.loginFormValue = {
      email: '',
      password: '',
      rememberMe: false,
    };
    this.errorLoginFormValue = {
      email: false,
      password: false,
    };
    this.accessTokenExpirationTime = 1;
    this.refreshTokenExpirationTime = 24;
    this.redirectUrl = null;

    if (process.env.REACT_APP_ACCESS_TOKEN_EXPIRATION_TIME) {
      this.accessTokenExpirationTime =
        +process.env.REACT_APP_ACCESS_TOKEN_EXPIRATION_TIME;
    }

    if (process.env.REACT_APP_REFRESH_TOKEN_EXPIRATION_TIME) {
      this.refreshTokenExpirationTime =
        +process.env.REACT_APP_REFRESH_TOKEN_EXPIRATION_TIME;
    }

    makeObservable(this, {
      loggedUser: observable,
      loginFormValue: observable,
      redirectUrl: observable,
      login: action,
      logout: action,
      saveUser: action,
      setRedirectUrl: action,
      proceedAsGuest: action,
    });
  }

  private _setCurrentInfo(
    data: InfoUserWidthCredential,
    rememberMe: boolean
  ): void {
    const accessToken = data.accessToken;
    const refreshToken = data.refreshToken;
    this.loggedUser = data;

    if (rememberMe) {
      saveToStorage('accessToken', accessToken);
      saveToStorage('refreshToken', refreshToken);
      saveToStorage('loggedUser', JSON.stringify(data));
    } else {
      saveToCookie(
        'accessToken',
        accessToken,
        this.accessTokenExpirationTime * 60 * 60
      );
      saveToCookie(
        'refreshToken',
        refreshToken,
        this.refreshTokenExpirationTime * 60 * 60
      );
      saveToCookie(
        'loggedUser',
        JSON.stringify(data),
        this.accessTokenExpirationTime * 60 * 60
      );
    }
  }

  private _redirectAfterLogin(history: any): void {
    if (this.loggedUser) {
      return history.push(this.redirectUrl ?? '/my-projects');
    }
    return history.push('/login');
  }

  saveUser(data: any): void {
    this.loggedUser = data;
  }

  async login(history: any): Promise<void> {
    if (this._isErrorLogin()) {
      return;
    }
    const data = await authenticateService.login(this.loginFormValue);
    this._setCurrentInfo(data, this.loginFormValue.rememberMe);
    this.loginFormValue = this.loginFormValueInit;
    this._redirectAfterLogin(history);
  }

  async proceedAsGuest(history: any, guestUserData: InfoUserWidthCredential) {
    this._setCurrentInfo(
      { ...guestUserData },
      false
    );
    this._redirectAfterLogin(history);
  }

  private _isErrorLogin(): boolean {
    this.errorLoginFormValue = this.errorLoginFormValueInit;
    let isError = false;

    if (!this.loginFormValue.email) {
      this.errorLoginFormValue.email = true;
      isError = true;
    }

    if (!this.loginFormValue.password) {
      this.errorLoginFormValue.password = true;
      isError = true;
    }

    return isError;
  }

  async checkToken(
    accessToken?: string,
    refreshToken?: string,
    visitedAsGuest?: boolean,
    customerDeclarationLink?: string | null
  ): Promise<void> {
    let data = await authenticateService.checkToken(
      accessToken,
      refreshToken,
      visitedAsGuest
    );
    if (data) {
      if (visitedAsGuest && customerDeclarationLink) {
        data = { ...data, customerDeclarationLink };
      }
      this.saveUser(data);
      if (!accessToken && data.accessToken) {
        this._setCurrentInfo(data, false);
      }
    }
  }

  async logout(history: any): Promise<any> {
    const accessToken =
      retrieveFromStorage('accessToken') || retrieveFromCookie('accessToken');
    const refreshToken =
      retrieveFromStorage('refreshToken') || retrieveFromCookie('refreshToken');

    if (accessToken || refreshToken) {
      const result = await authenticateService.logout(
        accessToken,
        refreshToken
      );
      if (result) {
        removeFromStorage('accessToken');
        removeFromCookie('refreshToken');
        removeFromStorage('loggedUser');
        removeFromCookie('accessToken');
        removeFromCookie('refreshToken');
        removeFromCookie('loggedUser');
        this.loggedUser = null;
        this.redirectUrl = undefined;
        return history.push('/login');
      }
    }
  }

  async updateUser(model: UpdateUser): Promise<boolean> {
    return await authenticateService.updateUser(model);
  }

  async verifyEmail(token: string, redirectTo?: string): Promise<boolean> {
    const ret = await authenticateService.verifyEmail(token);
    if (redirectTo) this.setRedirectUrl(redirectTo);
    return ret;
  }

  public setRedirectUrl(url: string) {
    this.redirectUrl = url;
  }
}

export default AuthenticationStore;
