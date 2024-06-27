
import { observer } from 'mobx-react';
import React, { useLayoutEffect, useState, createRef, useEffect } from 'react';
import { LayoutContainer } from '@components/common/LayoutContainer';
import LoginForm from '@components/forms/LoginForm';

interface ComponentProps {
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setRememberMe: (value: boolean) => void;
  handleLogin: () => Promise<void>;
}

const Login = (props: ComponentProps) => {
  const {
    setEmail,
    setPassword,
    setRememberMe,
    handleLogin,
  } = props;

  const [step, setStep] = useState<number>(1);
 
  return (
    <LayoutContainer>
      <LoginForm 
        setEmail={setEmail}
        setPassword={setPassword}
        setRememberMe={setRememberMe}
        handleLogin={handleLogin}
      />
    </LayoutContainer>
  );
};

export default observer(Login);
