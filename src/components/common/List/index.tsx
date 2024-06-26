import React from 'react';
import { Title } from '../Title';

import { Container, Item } from './styles';

interface Props {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<Props> = ({ title, elements }) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((elements, index) => (
        <Item key={index}>{elements}</Item>
      ))}
    </Container>
  );
};

export default List;
