import React from 'react';
import { useEvents } from '../../hooks';

import { Container, SearchInput, Icon } from './styles';

const Search: React.FC = () => {
  const { searchEvent } = useEvents();

  const handleSearch = async (searchParam: string) => {
    searchEvent(searchParam);
  };

  return (
    <Container>
      <Icon name="search" />
      <SearchInput
        onChange={(event: { nativeEvent: { text: string } }) => {
          const searchParam = event.nativeEvent.text;
          handleSearch(searchParam);
        }}
        placeholder="Buscar eventos"
      />
    </Container>
  );
};

export default Search;
