import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomTextField = styled(TextField)(({ theme }) => ({
  background: 'transparent',
  color: 'transparent',
  border: '1px solid var(--twitter)',
  borderRadius: '25px',
  fontWeight: 'bold',
  fontSize: '15px',
  cursor: 'pointer',
  outline: 0,
  width: '-webkit-fill-available',
  '&:hover': {
    background: 'var(--twitter)',
    color: 'var(--secondary)',
  },
  'input': {
    width: '100%',
    height: '39px',
    fontSize: '14px',
    padding: '0',
    border: '1px solid var(--twitter)',
    borderRadius: '15px',
    // background: 'var(--search)',
    '&::placeholder': {
      color: 'var(--gray)',
    },
    outline: 0,
  }
}));