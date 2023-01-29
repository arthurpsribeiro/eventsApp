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
  date: Date;
  price: string;
  category: EventCategories;
};

interface IEventItemProps {
  event: EventT;
  purchaseButtonCallBack: () => void;
}

const EventItem: React.FC<IEventItemProps> = ({
  event,
  purchaseButtonCallBack,
}: IEventItemProps) => {
  return (
    <TouchableWrapper onPress={() => console.log('oi')}>
      <Container category={event.category}>
        <EventThumb source={{ uri: event.image }} />
        <InfoContainer>
          <Title>{event.name}</Title>
          <InfoText>
            {event.spot.name} - {event.spot.state}
          </InfoText>
          <InfoText>{event.date.toLocaleDateString()}</InfoText>

          <InfoRow>
            <PriceText>R$ {event.price}</PriceText>
            <PurchaseButton onPress={() => purchaseButtonCallBack()}>
              <ButtonTitle> Comprar </ButtonTitle>
            </PurchaseButton>
          </InfoRow>
        </InfoContainer>
      </Container>
    </TouchableWrapper>
  );
};

export default EventItem;
