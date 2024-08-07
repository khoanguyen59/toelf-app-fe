import { observer } from 'mobx-react';
import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '@/RootStoreProvider';
import Login from '@components/account/Login';
import { AppContainer } from '@components/common/AppContainer';
import { AppWrapperRight } from '@components/common/AppWrapper';

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

const LoginPage = () => {
  const { authenticationStore } = useStore();
  const { loginFormValue } = authenticationStore;
  const location = useLocation();
  const navigate = useNavigate();

  const verified = location && location.state && !!location.state['verified'];

  const setEmail = (value: string): void => {
    loginFormValue.email = value;
  };

  const setPassword = (value: string): void => {
    loginFormValue.password = value;
  };

  const setRememberMe = (value: boolean): void => {
    loginFormValue.rememberMe = value;
  };

  const handleLogin = async (): Promise<void> => {
    await authenticationStore.login(navigate);
  };

  return (
    <AppContainer>
      <AppWrapperRight>
        <Login
          setEmail={setEmail}
          setPassword={setPassword}
          setRememberMe={setRememberMe}
          handleLogin={handleLogin}
        />
      </AppWrapperRight>
    </AppContainer>
  );
};

export default observer(LoginPage);
