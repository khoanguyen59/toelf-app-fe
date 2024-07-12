import { Autocomplete, Stack, TextField } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { observer } from "mobx-react";
import SearchResult from "../SearchResult";
import { useStore } from "@/RootStoreProvider";

const SearchBar = () => {
  const { searchStore } = useStore();
  const { searchResults } = searchStore;
  const { lectures, topics } = searchResults;

  const handleChange = async (keyword: string) => {
    await searchStore.searchByKeyword(keyword.toLowerCase());
  };

  return (
    <Autocomplete
      freeSolo
      id='search-autocomplete'
      clearOnBlur={false}
      options={[
        ...topics.map((topic) => topic.name),
        ...lectures.map((lecture) => lecture.name)
      ]}
      onChange={() => console.log(1111)}
      // onClose={(event, reason) => {
      //   console.log(event, reason);
      // }}
      onMouseDown={(e) => e.preventDefault()}
      renderInput={(params) => {
        return <TextField
          {...params}
          label='Search Topics, Lecture,...'
          sx={{
            height: '39px',
            color: 'var(--gray)'
          }}
          onChange={(event) => {
            handleChange(event.target.value);
          }}
          InputProps={{
            ...params.InputProps,
            onKeyDown: (e) => {
              if (e.key === 'Enter') {
                e.stopPropagation();
              }
            },
            endAdornment: (
              <Stack
                direction='row'
                justifyContent='flex-end'
                alignItems='center'
                sx={{
                  color: '#fff',
                }}
              >
                <SearchIcon />
                {params.InputProps.endAdornment}
              </Stack>
            ),
          }}
        />
      }}
      sx={{
        width: '100%',
        height: '39px',
        borderRadius: '19.5px',
        background: 'var(--search)',
        '.MuiInputBase-root': {
          height: '39px',
          borderRadius: '19.5px',
        },
        input: {
          color: 'var(--gray)',
          fontSize: '14px',
          fontFamily: 'inherit',
          fontWeight: '600',
        },
        label: {
          color: 'var(--gray)',
          fontSize: '14px',
          fontFamily: 'inherit',
          lineHeight: '0.75em',
        }
      }}
      PopperComponent={(props) => {
        return <SearchResult {...props} lectures={lectures} topics={topics} />
      }}
    />
  );
}

export default observer(SearchBar)