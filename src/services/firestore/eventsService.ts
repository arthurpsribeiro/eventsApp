import { formatEventData } from '../../utils/formatters/eventsFormatter';
import { eventsCollection } from './firestore';

import { EventT } from '../../components/Event/EventItem';

const getAllEvents = (
  eventsUpdatecallback: (data: EventT[]) => void,
): (() => void) => {
  const subscribe = eventsCollection.onSnapshot(eventSnapshot => {
    const data = eventSnapshot.docs.map(doc => {
      const formatedEvent = formatEventData({
        id: doc.id,
        date: doc.data().date,
        name: doc.data().name,
        category: doc.data().category,
        spot: doc.data().spot,
        price: doc.data().price,
        keyWords: doc.data().keyWords,
        image: doc.data().image,
      });
      return formatedEvent;
    });
    eventsUpdatecallback(data);
  });
  return subscribe;
};

const searchEvents = async (searchParam: string) => {
  try {
    const eventsSnapshot = await eventsCollection
      .where('keyWords', 'array-contains', searchParam.toLowerCase())
      .orderBy('name')
      .get();

    const data = eventsSnapshot.docs.map(doc => {
      const formatedEvent = formatEventData({
        id: doc.id,
        date: doc.data().date,
        name: doc.data().name,
        category: doc.data().category,
        spot: doc.data().spot,
        price: doc.data().price,
        keyWords: doc.data().keyWords,
        image: doc.data().image,
      });
      return formatedEvent;
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const EventsService = {
  getAllEvents,
  searchEvents,
};
