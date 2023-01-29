import firestore from '@react-native-firebase/firestore';

export const eventsCollection = firestore().collection('events');
