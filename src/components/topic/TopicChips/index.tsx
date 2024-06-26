import * as React from 'react';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import {
  Container,
  ListItem,
  TopicChip,
  PaperWrapper,
  Item,
  Title,
} from './styles';
import { List } from '@mui/material';
import FollowSuggestion from '@components/common/FollowSuggestion';

interface ChipData {
  key: number | string;
  label: string;
}

const TopicChips = () => {
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: 'Science & Technology' },
    { key: 1, label: 'Culture & Art' },
    { key: 2, label: 'Politics' },
    { key: 3, label: 'Economics & Finance' },
    { key: 4, label: 'Sports' },
    { key: 5, label: 'EURO 2024' },
    { key: 6, label: 'Education' },
    { key: 7, label: 'Entertainment' },
    { key: 8, label: 'Celebrity' },
    { key: 9, label: 'AI' },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Container>
      <Item>
        <Title>Discover new topics</Title>
      </Item>
      <PaperWrapper>
        {chipData.map((data) => {
          let icon;

          if (data.label === 'React') {
            icon = <TagFacesIcon />;
          }

          return (
            <ListItem key={data.key}>
              <TopicChip
                icon={icon}
                label={data.label}
                onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              />
            </ListItem>
          );
        })}
        <ListItem key={'more'}>
          <TopicChip
            icon={<TagFacesIcon />}
            label={'Show more...'}
          />
        </ListItem>
      </PaperWrapper>
      <Item>
        <Title>Your topics</Title>
      </Item>
      <PaperWrapper>
        <List sx={{ width: '100%', bgcolor: 'transparent' }}>
          {chipData.map((data) => {
            let icon;

            if (data.label === 'React') {
              icon = <TagFacesIcon />;
            }

            return (
              <FollowSuggestion name="Wuldku Kizon" nickname="@wkizon" />
            );
          })}
        </List>
      </PaperWrapper>
    </Container>
  );
};

export default TopicChips;
