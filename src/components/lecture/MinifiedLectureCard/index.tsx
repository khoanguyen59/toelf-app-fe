import { InfoLecture } from "@dto/lectures/InfoLecture.dto"
import { Box } from "@mui/material";
import { capitalizeStr } from "@utils/string.utils";
import { observer } from "mobx-react";
import React from "react";
import { Link as RouterLink } from 'react-router-dom';

interface ComponentProps {
  lecture?: InfoLecture;
}

const MinifiedLectureCard = (props: ComponentProps) => {
  const { lecture } = props;
  return (
    <Box
      sx={{
        width: '100%',
        padding: '10px 16px',
        borderTop: '1px solid var(--outline)',
        '&:first-child': {
          paddingTop: '13px',
        },
        '&:last-child': {
          paddingBottom: '17px',
        },
        textDecoration: 'none',
        '&:hover': {
          background: 'var(--twitter-dark-hover)'
        }
      }}
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
  );
}

export default observer(MinifiedLectureCard);