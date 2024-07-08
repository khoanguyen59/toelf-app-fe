
import { observer } from 'mobx-react';
import React from 'react';
import { LayoutContainer } from '@components/common/LayoutContainer';
import RegisterForm from '@components/forms/RegisterForm';

interface ComponentProps {
  registerFormValue: any;
  setRegisterFormValue: (value: any) => void;
  handleRegister: () => Promise<void>;
}

const Register = (props: ComponentProps) => {
  const {
    registerFormValue,
    setRegisterFormValue,
    handleRegister,
  } = props;

  return (
    <LayoutContainer>
      <RegisterForm
        registerFormValue={registerFormValue}
        setRegisterFormValue={setRegisterFormValue}
        handleRegister={handleRegister}
      />
    </LayoutContainer>
  );
};

export default observer(Register);
