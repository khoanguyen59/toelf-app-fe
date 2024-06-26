import LoginBackgroundNo from '@/assets/images/login/background-no.png';
import LoginBackgroundIs from '@/assets/images/login/background-is.png';

export const getLoginBackground = () => {
  return process.env.REACT_APP_REGION === 'norway'
    ? LoginBackgroundNo
    : LoginBackgroundIs;
};
