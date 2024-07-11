import { Autocomplete, MenuItem, Popper, Stack, TextField } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { observer } from "mobx-react";
import { theme } from "@/themes/MolunderTheme";
import { SelectOption } from "@dto/commons/SelectOption.dto";
import { InfoLecture } from "@dto/lectures/InfoLecture.dto";
import { InfoTopic } from "@dto/topics/InfoTopic.dto";

interface ComponentProps {
  lectures?: InfoLecture[];
  topics?: InfoTopic[];
}

const SearchResult = (props: ComponentProps) => {
  const { lectures, topics } = props;

  return (
    <Popper
      open={true}
      children={(childProps) => {
        return (
          <>
            {!topics.length && !lectures.length && (
              <MenuItem
                value={''}
                sx={{
                  backgroundColor: '#fff',
                  '&:hover': {
                    backgroundColor: theme.palette.background.default,
                  },
                }}
              >
                No result found
              </MenuItem>
            )}
            {topics.map((topic: InfoTopic, index) => {
              return (
                <MenuItem
                  key={index}
                  value={topic.tag}
                  sx={{
                    backgroundColor: '#fff',
                    '&:hover': {
                      backgroundColor: theme.palette.background.default,
                    },
                  }}
                  onClick={(event) => {
                    console.log(event);
                  }}
                >
                  {topic.name}
                </MenuItem>
              );
            })}
          </>
        );
      }}
      placement='bottom-start'
      sx={{ zIndex: 100 }}
    />
  );
};

export default observer(SearchResult)