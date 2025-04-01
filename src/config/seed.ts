import { collection, addDoc } from 'firebase/firestore';

import { db } from './firebase';
import { IFamily, SocialTag } from '../interfaces';

const generateSlug = (name: string) => {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
};

const families: IFamily[] = [
  {
    id: '1',
    name: 'Doe Family',
    members: [
      { name: 'John Doe', confirmation: false, isChildren: false },
      { name: 'Jane Doe', confirmation: false, isChildren: false },
      { name: 'Jack Doe', confirmation: false, isChildren: true },
    ],
    slug: generateSlug('Doe Family'),
    tags: [
      SocialTag.FAMILY,
      SocialTag.FRIENDS,
      // Add more tags as needed
    ],
  },
  // Add more families as needed
];

export const seed = async () => {
  try {
    for (const family of families) {
      const docRef = await addDoc(collection(db, 'families'), {
        ...family,
      });
      console.log('Document written with ID: ', docRef.id);
    }
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};
