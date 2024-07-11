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
import { CustomInput } from '@components/common/CustomInput';
import { Title } from '@components/common/Title';
import { useNavigate } from 'react-router-dom';

interface ComponentProps {
  registerFormValue: any;
  setRegisterFormValue: (value: any) => void;
  handleRegister: () => Promise<void>;
}

const RegisterForm = (props: ComponentProps) => {
  const isWeb = useMediaQuery(theme.breakpoints.up('sm'));
  const navigate = useNavigate();

  const {
    registerFormValue,
    setRegisterFormValue,
    handleRegister,
  } = props;

  const handleChange = (event: any) => {
    setRegisterFormValue({
      ...registerFormValue,
      [event.target.name]: event.target.value,
    })
  }

  const redirectToLogin = () => {
    navigate('/sign-in');
  }

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '57px 24px 200px',
        marginTop: '3px',
        '> div + div': {
          marginTop: '15px',
        },
      }}
    >
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
        <Title>Sign up & start your journey</Title>
      </Box>
      <Box>
        <CustomInput placeholder='Email' type='email' name='email' onChange={handleChange} />
      </Box>
      <Box>
        <CustomInput placeholder='Password' type='password' name='password' onChange={handleChange} />
      </Box>
      <Box>
        <CustomInput placeholder='Confirm password' type='password' name='confirmPassword' onChange={handleChange} />
      </Box>
      <Box>
        <CustomInput placeholder='First name' type='text' name='firstName' onChange={handleChange} />
      </Box>
      <Box>
        <CustomInput placeholder='Last name' type='text' name='lastName' onChange={handleChange} />
      </Box>
      <Box>
        <CustomInput placeholder='Phone number' type='text' name='phoneNumber' onChange={handleChange} />
      </Box>
      <Box>
        <Box sx={{ width: '100%', textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
          <Button outlined onClick={handleRegister}>Register</Button>
        </Box>
        <Divider textAlign='center'>Already have an account</Divider>
        <Box sx={{ width: '100%', textAlign: 'center', marginTop: '1rem' }}>
          <Button outlined onClick={redirectToLogin}>Login</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default observer(RegisterForm);
