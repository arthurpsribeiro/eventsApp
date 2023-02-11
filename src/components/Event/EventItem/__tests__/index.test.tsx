import { render } from '@testing-library/react-native';
import { EventItem, EventCategories } from '../../..';

test('the component rendered', () => {
  render(
    <EventItem
      event={{
        id: 'eventid',
        image:
          'https://images.unsplash.com/photo-1573496773905-f5b17e717f05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        name: 'Workshop de Programação para Iniciantes',
        spot: {
          name: 'Auditório da Universidade de São Paulo',
          state: 'São Paulo',
          city: 'São Paulo',
          // neighborhood: 'Butantã',
        },
        date: '22/02/2023',
        price: '99,99',
        category: EventCategories.BUSINESS,
        keyWords: ['a', 'b', 'c'],
      }}
      purchaseButtonCallback={() => console.log('oi')}
      eventPressCallback={() => console.log('oi')}
    />,
  );
});
