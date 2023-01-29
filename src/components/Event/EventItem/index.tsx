import React from 'react';

import {
  Container,
  ContainerRow,
  Title,
  InfoText,
  PurchaseButton,
  ButtonTitle,
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
    <Container category={event.category}>
      <Title>{event.name}</Title>
      <ContainerRow>
        <InfoText>
          {event.spot.city} - {event.spot.state}
        </InfoText>
        <InfoText>R$ {event.price}</InfoText>
      </ContainerRow>
      <ContainerRow>
        <InfoText>{event.date.toLocaleDateString()}</InfoText>
        <PurchaseButton onPress={() => purchaseButtonCallBack()}>
          <ButtonTitle> Comprar </ButtonTitle>
        </PurchaseButton>
      </ContainerRow>
    </Container>
  );
};

export default EventItem;
