import React from 'react';

import {
  Container,
  ContainerRow,
  Title,
  InfoText,
  PurchaseButton,
  ButtonTitle,
} from './styles';

type eventSpot = {
  spotName: string;
  spotCity: string;
  spotState: string;
};

export enum eventCategories {
  BUSINESS,
  EDUCATION,
}

type event = {
  id: string;
  name: string;
  spot: eventSpot;
  date: string;
  price: string;
  category: eventCategories;
};

interface EventItemProps {
  item: event;
}

const EventItem: React.FC<EventItemProps> = ({}: EventItemProps) => {
  const handlePurchaseButton = () => {
    console.log('purchase button');
  };
  return (
    <Container category={eventCategories.BUSINESS}>
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
