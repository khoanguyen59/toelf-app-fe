import { InfoLectureExtended } from '@dto/lectures/InfoLecture.dto';
import { Box, Link } from '@mui/material';
import { capitalizeStr } from '@utils/string.utils';
import { observer } from 'mobx-react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

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
        <Box
          sx={{
            padding: '10px 16px',
            borderTop: '1px solid var(--outline)',
            '&:first-child': {
              paddingTop: '13px',
            },
            '&:last-child': {
              paddingBottom: '17px',
            },
            textDecoration: 'none',
          }}
          key={index}
          component={RouterLink}
          to={`/lecture/${lecture.id}`}
        >
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            'div': {
              display: 'flex',
              flexDirection: 'column',
              fontSize: '14px',
              '> span': {
                color: 'var(--gray)',
                marginBottom: '3px',
              }
            },
            'img': {
              height: '60px',
              width: '65px',
              borderRadius: '14px',
            }
          }}>
            <div>
              <span>
                {
                  lecture.stringifiedTopics
                    .map((topic) => capitalizeStr(topic))
                    .join(` · `)
                }
                </span>
              <strong>{lecture.name}</strong>
            </div>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default observer(SuggestedLectures);
