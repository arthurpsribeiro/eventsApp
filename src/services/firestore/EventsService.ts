import { formatEventData } from '../../utils/formatters/eventsFormatter';
import { eventsCollection } from './Firestore';

import { EventT } from '../../components/Event/EventItem';

const getAllEvents = async (): Promise<EventT[]> => {
  try {
    const eventsSnapshot = await eventsCollection.get();

    const data = eventsSnapshot.docs.map(doc => {
      const formatedEvent = formatEventData({
        id: doc.id,
        date: doc.data().date,
        name: doc.data().name,
        category: doc.data().category,
        spot: doc.data().spot,
        price: doc.data().price,
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
};
