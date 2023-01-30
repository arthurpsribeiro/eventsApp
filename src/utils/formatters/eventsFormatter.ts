import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

import { EventT, EventCategories } from '../../components/Event/EventItem';

type EventSpotT = {
  name: string;
  city: string;
  state: string;
};

type EventDataT = {
  id: string;
  name: string;
  spot: EventSpotT;
  date: FirebaseFirestoreTypes.Timestamp;
  price: string;
  category: string;
  image: string;
};

const formatCategory = (category: string): EventCategories => {
  return category.toUpperCase() === 'BUSINESS'
    ? EventCategories.BUSINESS
    : EventCategories.EDUCATION;
};

const formatDate = (date: FirebaseFirestoreTypes.Timestamp): string => {
  const parsedDate = new firestore.Timestamp(
    date.seconds,
    date.nanoseconds,
  ).toDate();
  return parsedDate.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
};

export const formatEventData = (eventData: EventDataT): EventT => {
  return {
    ...eventData,
    category: formatCategory(eventData.category),
    date: formatDate(eventData.date),
  };
};
