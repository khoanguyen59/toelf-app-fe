import { Box } from '@mui/material';
import React from 'react';
import LectureCard from '../LectureCard';

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
