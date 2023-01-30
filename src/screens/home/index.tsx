import React from 'react';
import { ActivityIndicator, Alert, FlatList, Text } from 'react-native';
import { useEvents } from '../../hooks';
import { EventT, EventItem } from '../../components';

import { Container, Loading, Separator } from './styles';

const Home: React.FC = () => {
  const { events, loading } = useEvents();

  const handlePurchaseButton = async (event: EventT) => {
    Alert.alert('Ops!', 'Estamos trabalhando nisso, volte mais tarde!');
  };
  return (
    <Container>
      {/* <Text> Input de Busca</Text> */}
      {loading ? (
        <Loading size={'large'} />
      ) : (
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
      )}
    </Container>
  );
};

export default Home;
