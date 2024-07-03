import { InfoLecture } from '@dto/lectures/InfoLecture.dto';
import { Box, Link, Stack, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import {
  Retweeted,
  RocketseatIcon,
  Body,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

interface ComponentProps {
  lecture?: InfoLecture;
}

const LectureCard = (props: ComponentProps) => {
  const { lecture } = props;
  const navigate = useNavigate();

  return (
    <>
      <Box
        key={lecture.id}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '14px 16px',
          borderBottom: '1px solid var(--outline)',
          maxWidth: '100%',
          cursor: 'pointer',
          '&:hover': {
            background: 'var(--twitter-dark-hover)'
          }
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
              {/* <strong>{lecture.name}</strong> */}
              <span>{(lecture.topics || []).map((topic) => topic.name).join(` ,`)}</span>
              <Dot />
              <time>{lecture.createdAt}</time>
            </Header>

            <Description>
              {`${lecture.summary}...`}
              {/* <Link
                href={`/lecture/${lecture.id}`}
                sx={{
                  textDecoration: 'none',
                }}
              >View detail</Link> */}
            </Description>
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
            <ImageContent>
              {lecture.thumbnailUrl ? (
                <img src={lecture.thumbnailUrl} alt="Lecture Image" />
              ) : (
                ''
              )}
            </ImageContent>

            <Icons>
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
            </Icons>
          </Content>
        </Body>
      </Box>
    </>
  );
};

export default observer(LectureCard);
