import { Box, IconButton, Stack } from '@mui/material';
import { observer } from 'mobx-react';
import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

interface ComponentProps {
  title?: string;
  icon?: SvgIconComponent;
};

const LayoutHeader = (props: ComponentProps) => {
  const { title, icon } = props;
  const navigate = useNavigate();

  const openProfile = () => {
    navigate('/profile');
  };

  return (
    <Box 
      sx={{
        zIndex: 2,
        position: 'sticky',
        top: 0,
        background: 'var(--primary)',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
        padding: '8px 0 9px 13px',
        borderBottom: '1px solid var(--outline)',
        justifyContent: 'space-between',
        '> button': {
          padding: '8px',
          borderRadius: '50%',
          outline: 0,
          cursor: 'pointer',
          '&:hover': {
            background: 'var(--twitter-dark-hover)',
          }
        }
      }}
    >
      <Stack flexDirection='row'>
        <Box>
          <IconButton
            onClick={() => navigate(-1)}
            sx={{ 
              '.MuiSvgIcon-root': {
                fill: 'var(--twitter)',
              }
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            '> strong': {
              fontSize: '19px',
            },
            marginTop: '5px',
          }}
        >
          <strong>{title}</strong>
        </Box>
      </Stack>
      <IconButton
        sx={{ 
          '.MuiSvgIcon-root': {
            height: '28px',
            width: '28px',
          }
        }}
        onClick={openProfile}
      >
        <ManageAccountsOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default observer(LayoutHeader);
