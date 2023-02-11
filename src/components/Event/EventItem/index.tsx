import React from 'react';

import {
  Container,
  InfoRow,
  Title,
  InfoText,
  PurchaseButton,
  ButtonTitle,
  EventThumb,
  InfoContainer,
  PriceText,
  TouchableWrapper,
} from './styles';

type EventSpotT = {
  name: string;
  city: string;
  state: string;
};

export enum EventCategories {
  BUSINESS,
  EDUCATION,
}

export type EventT = {
  id: string;
  image: string;
  name: string;
  spot: EventSpotT;
  date: string;
  price: string;
  keyWords: string[];
  category: EventCategories;
};

interface IEventItemProps {
  event: EventT;
  purchaseButtonCallback: () => void;
  eventPressCallback: () => void;
}

const EventItem: React.FC<IEventItemProps> = ({
  event,
  purchaseButtonCallback,
  eventPressCallback,
}: IEventItemProps) => {
  return (
    <TouchableWrapper onPress={() => eventPressCallback()}>
      <Container category={event.category}>
        <EventThumb source={{ uri: event.image }} />
        <InfoContainer>
          <Title>{event.name}</Title>
          <InfoText>
            {event.spot.name} - {event.spot.state}
          </InfoText>
          <InfoText>{event.date}</InfoText>

          <InfoRow>
            <PriceText>R$ {event.price}</PriceText>
            <PurchaseButton onPress={() => purchaseButtonCallback()}>
              <ButtonTitle> Comprar </ButtonTitle>
            </PurchaseButton>
          </InfoRow>
        </InfoContainer>
      </Container>
    </TouchableWrapper>
  );
};

export default EventItem;
