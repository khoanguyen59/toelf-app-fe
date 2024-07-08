import {
  Box,
  Divider,
  useMediaQuery,
} from '@mui/material';
import { observer } from 'mobx-react';
import React from 'react';
import { theme } from '@/themes/MolunderTheme';
import { useStore } from '@/RootStoreProvider';
import Button from '@components/common/Button';
import { SearchInput } from '@components/common/SearchInput';
import { Title } from '@components/common/Title';
import { useNavigate } from 'react-router-dom';

interface ComponentProps {
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setRememberMe: (value: boolean) => void;
  handleLogin: () => Promise<void>;
}

const LoginForm = (props: ComponentProps) => {
  const { authenticationStore } = useStore();
  const { loginFormValue, errorLoginFormValue } = authenticationStore;
  const isWeb = useMediaQuery(theme.breakpoints.up('sm'));
  const navigate = useNavigate();

  const {
    setEmail,
    setPassword,
    setRememberMe,
    handleLogin,
  } = props;

  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const handleClickShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
  };

  const beforeSetRememberMe = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRememberMe(event.target.checked);
  };

  const keyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if ('Enter' === event.key) {
      handleLogin();
    }
  };

  const redirectToRegister = () => {
    navigate('/sign-up');
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      padding: '57px 24px 200px',
      marginTop: '3px',
      '> div + div': {
        marginTop: '15px',
      },
    }}>
      <Box sx={{
        margin: '0 auto',
        padding: '10px 16px',
        '&:first-child': {
          paddingTop: '13px',
        },
        '&:last-child': {
          paddingBottom: '17px',
        }
      }}>
        <Title>Already have an account?</Title>
      </Box>
      <Box>
        <SearchInput placeholder="Username" type='email' onChange={(e) => setEmail(e.target.value)} />
      </Box>
      <Box>
        <SearchInput placeholder="Password" type='password' onChange={(e) => setPassword(e.target.value)}/>
      </Box>
      <Box>
        <Box sx={{ width: '100%', textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
          <Button outlined onClick={() => handleLogin()}>Login</Button>
        </Box>
        <Divider textAlign="center">Or</Divider>
        <Box sx={{ width: '100%', textAlign: 'center', marginTop: '1rem' }}>
          <Button outlined onClick={redirectToRegister}>Create account</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default observer(LoginForm);
