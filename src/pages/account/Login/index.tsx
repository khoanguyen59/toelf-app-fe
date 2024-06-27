import { observer } from 'mobx-react';
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useStore } from '@/RootStoreProvider';
import Login from '@components/account/Login';
import { AppContainer } from '@components/common/AppContainer';
import { AppWrapper } from '@components/common/AppWrapper';
import TopicChips from '@components/topic/TopicChips';
import MenuBar from '@components/menus/MenuBar';

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

const LoginPage = () => {
  const { authenticationStore } = useStore();
  const { loginFormValue } = authenticationStore;
  const location = useLocation();
  const query = useQuery();

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
    await authenticationStore.login(history);
  };

  return (
    <AppContainer>
      <AppWrapper>
        <Login
          setEmail={setEmail}
          setPassword={setPassword}
          setRememberMe={setRememberMe}
          handleLogin={handleLogin}
        />
      </AppWrapper>
    </AppContainer>
  );
};

export default observer(LoginPage);
