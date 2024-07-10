import { InfoLectureExtended } from '@dto/lectures/InfoLecture.dto';
import { Box, Link } from '@mui/material';
import { capitalizeStr } from '@utils/string.utils';
import { observer } from 'mobx-react';
import React from 'react';
import MinifiedLectureCard from '../MinifiedLectureCard';

interface ComponentProps {
  suggestedLectures: InfoLectureExtended[];
}

const SuggestedLectures = (props: ComponentProps) => {
  const { suggestedLectures } = props;

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--secondary)',
      borderRadius: '14px'
    }}>
      <Box sx={{
        padding: '10px 16px',
        '& + a': {
          borderTop: '1px solid var(--outline)',
        },
        '&:first-child': {
          paddingTop: '13px',
        },
        '&:last-child': {
          paddingBottom: '17px',
        }
      }}>
        <Box sx={{ fontWeight: 'bold', fontSize: '19px' }}>Suggested lectures</Box>
      </Box>
      {suggestedLectures.map((lecture, index) => (
        <MinifiedLectureCard lecture={lecture} key={index} />
      ))}
    </Box>
  );
};

export default observer(SuggestedLectures);
