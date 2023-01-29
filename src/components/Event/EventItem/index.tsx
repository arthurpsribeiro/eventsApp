import React from 'react';

import {
  Container,
  ContainerRow,
  Title,
  InfoText,
  PurchaseButton,
  ButtonTitle,
} from './styles';

type EventSpot = {
  spotName: string;
  spotCity: string;
  spotState: string;
};

export enum EventCategories {
  BUSINESS,
  EDUCATION,
}

export type Event = {
  id: string;
  name: string;
  spot: EventSpot;
  date: Date;
  price: string;
  category: EventCategories;
};

interface EventItemProps {
  item: Event;
}

const EventItem: React.FC<EventItemProps> = ({}: EventItemProps) => {
  const handlePurchaseButton = () => {
    console.log('purchase button');
  };
  return (
    <Container category={EventCategories.BUSINESS}>
      <Title>Nome do evento</Title>
      <ContainerRow>
        <InfoText>São Paulo - SP</InfoText>
        <InfoText>R$ 20,00</InfoText>
      </ContainerRow>
      <ContainerRow>
        <InfoText>20/02/2023</InfoText>
        <PurchaseButton onPress={() => handlePurchaseButton()}>
          <ButtonTitle> Comprar </ButtonTitle>
        </PurchaseButton>
      </ContainerRow>
    </Container>
  );
};

export default EventItem;
