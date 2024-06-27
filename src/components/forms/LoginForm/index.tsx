import { I18N } from '@/enums/i18n.enum';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Box,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { borderTop, Theme } from '@mui/system';
import { observer } from 'mobx-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '@/themes/MolunderTheme';
import { useStore } from '@/RootStoreProvider';
import ControlledInputText from '@components/common/ControlledInputText';
import CustomCheckBox from '@components/common/CustomCheckBox';
import Button from '@components/common/Button';
import { SearchInput } from '@components/common/SearchInput';
import { Body } from './styles';
import { Title } from '@components/common/Title';
import { Item } from '@components/topic/TopicChips/styles';

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

  const { t } = useTranslation();
  const {
    TITLE_EMAIL,
    TITLE_PASSWORD,
    TITLE_FORGOT_PASSWORD,
    TITLE_KEEP_ME_LOGIN,
    BUTTONS_LOGIN,
    ACCOUNT_CREATE,
    TITLE_REQUIRE,
  } = I18N;

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

  return (
    <Body>
      <Item>
        <Title>Already have an account?</Title>
      </Item>
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
          <Button outlined>Create account</Button>
        </Box>
      </Box>
    </Body>
  );
};

export default observer(LoginForm);
