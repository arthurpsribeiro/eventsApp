import React from 'react';
import { FlatList, Text } from 'react-native';
import EventItem from '../../components/Event/EventItem';

import { Container, Separator } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Text> Input de Busca</Text>
      <FlatList
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({}) => <EventItem />}
        ItemSeparatorComponent={Separator}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Home;
