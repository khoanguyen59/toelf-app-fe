import { Box } from '@mui/material';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { BackIcon } from './styles';
import { SvgIconComponent } from '@mui/icons-material';

interface ComponentProps {
  title?: string;
  icon?: SvgIconComponent;
};

const LayoutHeader = (props: ComponentProps) => {
  const { title, icon } = props;  
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
      <button>
        <BackIcon />
      </button>

      <Box sx={{
        marginLeft: '17px',
        display: 'flex',
        flexDirection: 'column',
        '> strong': {
          fontSize: '19px',
        },
        '> span': {
          fontSize: '15px',
          color: 'var(--gray)',
        }
      }}>
        <strong>{title}</strong>
      </Box>
    </Box>
  );
};

export default observer(LayoutHeader);
