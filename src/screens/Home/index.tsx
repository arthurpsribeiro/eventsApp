import React from 'react';
import { Alert, FlatList } from 'react-native';
import { useEvents } from '../../hooks';
import { EventT, EventItem, Search, EventListEmpty } from '../../components';

import { Container, Loading, Separator, VerticalSpacing } from './styles';

const Home: React.FC = () => {
  const { events, loading } = useEvents();

  const handlePurchaseButton = async (event: EventT) => {
    Alert.alert('Ops!', 'Estamos trabalhando nisso, volte mais tarde!');
  };
  return (
    <Container>
      <Search />
      <VerticalSpacing />
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
          ListEmptyComponent={EventListEmpty}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};

export default Home;
