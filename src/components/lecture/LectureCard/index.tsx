import { InfoLecture } from '@dto/lectures/InfoLecture.dto';
import { Box, FormControl, FormControlLabel, FormLabel, Link, Radio, RadioGroup, Stack, Typography, useMediaQuery } from '@mui/material';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ReactAudioPlayer from 'react-audio-player';

import {
  Body,
  Content,
  Header,
  Dot,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';
import Button from '@components/common/Button';
import { theme } from '@/themes/MolunderTheme';
import { ALPHABET_ANSWERS } from '@/constants/questions.constants';

interface ComponentProps {
  lecture?: InfoLecture;
  isDetailed?: boolean;
}

const LectureCard = (props: ComponentProps) => {
  const { lecture, isDetailed } = props;
  const isWeb = useMediaQuery(theme.breakpoints.up('sm'));
  const navigate = useNavigate();
  const [ showFullScript, setShowFullScript ] = useState<boolean>(false);
  const [ userAnswers, setUserAnswers ] = useState<string[]>([]);

  useEffect(() => {
    if (lecture && lecture.questions)
      setUserAnswers(Array(lecture.questions.length).fill(null));
  }, [lecture]);
  
  return lecture && (
    <>
      <Box
        key={lecture.id}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderBottom: '1px solid var(--outline)',
          maxWidth: '100%',
          maxHeight: '100vh',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          background: 'var(--secondary)',
          '&:hover': !isDetailed ? {
            background: 'var(--twitter-dark-hover)',
            cursor: 'pointer',
          } : 'none',
        }}
        onClick={(e) => {
          navigate(`/lecture/${lecture.id}`);
        }}
      >
        {/* {user.retweet ? (
          <Retweeted>
            <RocketseatIcon />
            You retweeted
          </Retweeted>
        ) : (
          ''
        )} */}
        <Body>
          <Content>
            <Header>
              <strong>{lecture.name}</strong>
              <span>{(lecture.topics || []).map((topic) => topic.name).join(` ,`)}</span>
              <Dot />
              <time>{lecture.createdAt}</time>
            </Header>
            <Box sx={{ maxHeight: isWeb ? 'none' : '400px', overflowY: 'auto' }}>
              {!isDetailed && <Typography sx={{ fontSize: '14px', marginTop: '4px' }}>
                  {`${lecture.summary}...`}
                </Typography>}
            </Box>
            <Stack direction='row'> 
              {lecture.stringifiedTopics.map((topic, index) => {
                return (
                  <Link 
                    href={`/lectures/?hashtag=${topic}`}
                    key={index}
                    sx={{
                      mr: 1, 
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      '&:hover': {
                        textDecoration: 'underline',
                      }
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {`#${topic} `}
                  </Link>
                );
              })}
            </Stack>
            {isDetailed && <ReactAudioPlayer
              src={lecture.audioFileUrl}
              controls
              style={{ width: 'calc(100% - 24px)', marginTop: '20px', height: '45px' }}
            />}
            <Box sx={{
              'img': {
                marginTop: '12px',
                width: isDetailed ? 'calc(100% - 24px)' : 'inherit',
                height: 'min(285px, max(175px, 41vw))',
                background: 'var(--outline)',
                borderRadius: '14px',
              }
            }}>
              {lecture.thumbnailUrl ? (
                <img src={lecture.thumbnailUrl} alt='Lecture Image' />
              ) : (
                ''
              )}
            </Box>
            {!isDetailed && <Icons>
              <Status>
                <CommentIcon />
                {lecture.numberOfTestsTaken}
              </Status>
              <Status>
                <RetweetIcon />
                {lecture.numberOfBookmarks}
              </Status>
              <Status>
                <LikeIcon />
                {lecture.numberOfLikes}
              </Status>
            </Icons>}
            {isDetailed && (lecture.questions || []).map((question, index) => {
              const { answers } = question;
              return (
                <FormControl key={index}>
                  <FormLabel
                    id={`question-id-${question.id}`}
                    sx={{ color: 'var(--twitter)', fontWeight: 'bold', mt: 1 }}
                  >{`${index + 1}. ${question.text}`}</FormLabel>
                  <RadioGroup
                    aria-labelledby='demo-controlled-radio-buttons-group'
                    name='controlled-radio-buttons-group'
                    value={userAnswers[index] || ''}
                    onChange={(event) => {
                      setUserAnswers(
                        (prev) => prev.map((answer, answerIndex) => answerIndex !== index ? answer : event.target.value)
                      )
                    }}
                  >
                    {
                      answers.map((answer, index) => {
                        return <FormControlLabel
                          value={ALPHABET_ANSWERS[index]}
                          control={<Radio />}
                          label={answer}
                          key={index}
                        />; 
                      })
                    }
                  </RadioGroup>
                </FormControl>
              )
            })}
            {isDetailed && <Box sx={{ textAlign: 'center', marginTop: '1rem', marginBottom: '2rem', marginRight: '24px' }}>
              <Button outlined onClick={() => setShowFullScript(!showFullScript)}>
                {showFullScript ? 'Hide script' : 'Show script'}
              </Button>
            </Box>}
            <Box sx={{ maxHeight: isWeb ? 'none' : '400px', overflowY: 'auto' }}>
              {isDetailed && showFullScript && 
                <Typography
                  sx={{ fontSize: '14px', marginTop: '4px', marginRight: '24px', textAlign: 'justify' }}
                  dangerouslySetInnerHTML={{ __html: lecture.fullScript }} 
                />} 
            </Box>
          </Content>
        </Body>
      </Box>
    </>
  );
};

export default observer(LectureCard);
