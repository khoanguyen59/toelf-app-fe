import { observer } from 'mobx-react';
import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '@/RootStoreProvider';
import { AppContainer } from '@components/common/AppContainer';
import { AppWrapperRight } from '@components/common/AppWrapper';
import Register from '@components/account/Register';
import { INIT_REGISTER_USER, RegisterUser } from '@dto/users/RegisterUser.dto';

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

const RegisterPage = () => {
  const [ registerFormValue, setRegisterFormValue ] = useState<RegisterUser>(INIT_REGISTER_USER);
  const { userStore } = useStore();
  const { registerUser } = userStore;

  const handleRegister = async (): Promise<void> => {
    await registerUser(registerFormValue);
  };

  return (
    <AppContainer>
      <AppWrapperRight>
        <Register
          registerFormValue={registerFormValue}
          setRegisterFormValue={setRegisterFormValue}
          handleRegister={handleRegister}
        />
      </AppWrapperRight>
    </AppContainer>
  );
};

export default observer(RegisterPage);
