import { Box } from '@mui/material';
import React from 'react';
import LectureCard from '../../lecture/LectureCard';

const Feed: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
        }}
      >
        <LectureCard />
      </Box>
    </Box>
  );
};

export default Feed;
