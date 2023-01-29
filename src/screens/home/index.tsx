import React from 'react';
import { FlatList, Text } from 'react-native';
import { useEvents } from '../../hooks';
import { EventT, EventItem } from '../../components';

import { Container, Separator } from './styles';

const Home: React.FC = () => {
  const { events } = useEvents();

  const handlePurchaseButton = async (event: EventT) => {
    console.log('purchase button', event);
  };
  return (
    <Container>
      <Text> Input de Busca</Text>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <EventItem
            event={item}
            purchaseButtonCallBack={() => handlePurchaseButton(item)}
          />
        )}
        ItemSeparatorComponent={Separator}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Home;
