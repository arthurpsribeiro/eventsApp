import React from 'react';
import { Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEvents } from '../../hooks';
import { HomeScreenNavigationProps } from '../../routes/stackRoutes/HomeStack';
import { EventT, EventItem, Search, EventListEmpty } from '../../components';

import { Container, Loading, Separator, VerticalSpacing } from './styles';

const Home: React.FC = () => {
  const { events, loading } = useEvents();

  const navigation = useNavigation<HomeScreenNavigationProps>();

  const handlePurchaseButton = async (event: EventT) => {
    Alert.alert('Ops!', 'Estamos trabalhando nisso, volte mais tarde!');
  };

  const handleEventPress = async (event: EventT) => {
    navigation.navigate('EventDetails', { event });
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
              purchaseButtonCallback={() => handlePurchaseButton(item)}
              eventPressCallback={() => handleEventPress(item)}
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
