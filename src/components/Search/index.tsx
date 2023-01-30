import React from 'react';

import { Container, SearchInput, Icon } from './styles';

const Search: React.FC = () => {
  const handleSearch = (searchParam: string) => {
    console.log(searchParam);
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
