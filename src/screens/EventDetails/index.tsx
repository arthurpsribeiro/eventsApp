import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Alert } from 'react-native';
import { EventDetailsScreenRouteProp } from '../../routes/stackRoutes/HomeStack';

import {
  ButtonTitle,
  Container,
  ContentContainer,
  EventThumb,
  EventTitle,
  InfoDescription,
  InfoLabel,
  InfoText,
  InfoWrapper,
  PurchaseButton,
  ScrollableContainer,
} from './styles';

const EventDetails: React.FC = ({}) => {
  const route = useRoute<EventDetailsScreenRouteProp>();
  const { event } = route.params;

  const handlePurchaseButtonPress = () => {
    Alert.alert('Ops!', 'Estamos trabalhando nisso, volte mais tarde!');
  };
  return (
    <Container>
      <ScrollableContainer>
        <EventThumb source={{ uri: event.image }} />
        <ContentContainer category={event.category}>
          <EventTitle>{event.name} </EventTitle>
          <InfoWrapper>
            <InfoLabel>Onde: </InfoLabel>
            <InfoText>
              {event.spot.name} - {event.spot.city} - {event.spot.state}
            </InfoText>
          </InfoWrapper>
          <InfoWrapper>
            <InfoLabel>Quando: </InfoLabel>
            <InfoText>{event.date}</InfoText>
          </InfoWrapper>
          <InfoWrapper>
            <InfoLabel>Informações: </InfoLabel>
            <InfoDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              porttitor magna quis ullamcorper rhoncus. Curabitur dapibus
              rhoncus erat eget molestie. Sed nec hendrerit libero, nec varius
              urna. Donec vel neque in metus lobortis vehicula ornare sed metus.
              Duis hendrerit arcu vel finibus venenatis.
            </InfoDescription>
          </InfoWrapper>
          <InfoWrapper>
            <InfoLabel>Valor: </InfoLabel>
            <InfoText>R$ {event.price}</InfoText>
          </InfoWrapper>
        </ContentContainer>
      </ScrollableContainer>
      <PurchaseButton onPress={() => handlePurchaseButtonPress()}>
        <ButtonTitle>Comprar</ButtonTitle>
      </PurchaseButton>
    </Container>
  );
};

export default EventDetails;
