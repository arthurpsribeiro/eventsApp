import React from 'react';

import { Container, CustomText } from './styles';

const EventListEmpty: React.FC = () => {
  return (
    <Container>
      <CustomText>Nenhum evento encontrado</CustomText>
    </Container>
  );
};

export default EventListEmpty;
