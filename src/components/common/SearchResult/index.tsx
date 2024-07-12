import { Box, Link, MenuItem, Popper } from "@mui/material";
import React from "react";
import { observer } from "mobx-react";
import { theme } from "@/themes/MolunderTheme";
import { InfoLecture } from "@dto/lectures/InfoLecture.dto";
import { getIconByTopic, InfoTopic } from "@dto/topics/InfoTopic.dto";
import { PopperProps } from "@mui/base";
import MinifiedLectureCard from "@components/lecture/MinifiedLectureCard";
import FollowSuggestion from "../FollowSuggestion";
import { useStore } from "@/RootStoreProvider";
import { useNavigate } from "react-router-dom";

interface ComponentProps extends PopperProps {
  lectures?: InfoLecture[];
  topics?: InfoTopic[];
}

const SearchResult = (props: ComponentProps) => {
  const { lectures, topics, ...popperProps } = props;
  const navigate = useNavigate();
  const { userStore } = useStore();
  const { profileUser } = userStore;

  return (
    <Popper
      {...popperProps}
      open={true}
      onMouseDown={(event) => event.preventDefault()}
      children={(childProps) => {
        return (
          <Box sx={{ maxHeight: '700px', overflowY: 'auto', scrollbarWidth: 'none' }}>
            {topics.length === 0 && lectures.length === 0 && (
              <MenuItem
                value={''}
                sx={{
                  backgroundColor: 'var(--secondary)',
                  '&:hover': {
                    backgroundColor: 'var(--twitter-dark-hover)',
                  },
                }}
              >
                No result found
              </MenuItem>
            )}
            {topics.map((topic: InfoTopic, index) => {
              const followedByUser = profileUser.topics.map((topic) => topic.tag).includes(topic.tag);
              return (
                <MenuItem
                  key={index}
                  value={topic.tag}
                  onClick={(event) => {
                    console.log(2222);
                    navigate(`/lectures/?topics=${topic.tag}`);
                  }}
                  sx={{
                    backgroundColor: 'var(--secondary)',
                    '&:hover': {
                      backgroundColor: 'var(--twitter-dark-hover)',
                    },
                  }}
                >
                  <FollowSuggestion
                    icon={getIconByTopic(topic)}
                    label={topic.name}
                    subLabel={''}
                    endText={followedByUser ? 'Followed' : 'Follow'}
                    showEndButton={false}
                  />
                </MenuItem>
              );
            })}
            {lectures.map((lecture: InfoLecture, index) => {
              return (
                <MenuItem
                  key={index}
                  value={lecture.id}
                  sx={{
                    backgroundColor: 'var(--secondary)',
                    '&:hover': {
                      backgroundColor: 'var(--twitter-dark-hover)',
                    },
                    textWrap: 'wrap',
                    width: '100%',
                  }}
                  onClick={(event) => {
                    event.stopPropagation();
                    navigate(`/lecture/${lecture.id}`);
                  }}
                >
                  <MinifiedLectureCard lecture={lecture} />
                </MenuItem>
              );
            })}
          </Box>
        );
      }}
      placement='bottom-start'
      sx={{ borderRadius: '19.5px' }}
    />
  );
};

export default observer(SearchResult)