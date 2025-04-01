import { collection, addDoc } from 'firebase/firestore';

import { db } from './firebase';

const families = [
  {
    name: 'Familia Martínez Baeza',
    members: [
      { name: 'Mamá Alis', confirmation: true },
      { name: 'Papá Poncho', confirmation: true },
      { name: 'Ferchis', confirmation: true },
    ],
  },
  {
    name: 'Familia Martínez Beltrán',
    members: [
      { name: 'Iván', confirmation: false },
      { name: 'Hannia', confirmation: false },
    ],
  },
  {
    name: 'Familia David',
    members: [
      { name: 'David', confirmation: false },
      { name: 'Mamá David', confirmation: false },
      { name: 'Hermana David', confirmation: false },
    ],
  },
  {
    name: 'Familia Tía Elena',
    members: [
      { name: 'Tía Elena', confirmation: false },
      { name: 'Tío Roberto', confirmation: false },
      { name: 'Monis', confirmation: false },
      { name: 'Ernesto', confirmation: false },
      { name: 'Ezequiel', confirmation: false },
    ],
  },
  {
    name: 'Familia Tía Gise',
    members: [
      { name: 'Tía Gise', confirmation: false },
      { name: 'Acompañante Tía Gise', confirmation: false },
    ],
  },
  {
    name: 'Familia Tío Rubén',
    members: [
      { name: 'Tío Rubén', confirmation: false },
      { name: 'Tía Marce', confirmation: false },
    ],
  },
  {
    name: 'Familia Yose',
    members: [
      { name: 'Yoselin', confirmation: false },
      { name: 'Alex', confirmation: false },
      { name: 'Alma', confirmation: false },
      { name: 'Ricardo', confirmation: false },
    ],
  },
  {
    name: 'Tío Adolfo',
    members: [{ name: 'Adolfo Martínez', confirmation: false }],
  },
  {
    name: 'Bere',
    members: [{ name: 'Berenice', confirmation: false }],
  },
  {
    name: 'Vale Arreguin',
    members: [
      { name: 'Valería Arreguin', confirmation: false },
      { name: 'Acompañante Vale', confirmation: false },
    ],
  },
  {
    name: 'Familia Víctor',
    members: [
      { name: 'Víctor García', confirmation: false },
      { name: 'Marlén', confirmation: false },
      { name: 'Eren Gael', confirmation: false },
    ],
  },
  {
    name: 'Familia Tía Cris',
    members: [
      { name: 'Tía Cris', confirmation: false },
      { name: 'Tío Iván', confirmation: false },
      { name: 'Blanquita', confirmation: false },
    ],
  },
  {
    name: 'Abuelos',
    members: [
      { name: 'Abuela Ceci', confirmation: false },
      { name: 'Abuelo Daniel', confirmation: false },
    ],
  },
  {
    name: 'Familia Tía Chena',
    members: [
      { name: 'Tía Chena', confirmation: false },
      { name: 'Tío Gallo', confirmation: false },
    ],
  },
  {
    name: 'Familia Tía Dulce',
    members: [
      { name: 'Tía Dulce', confirmation: false },
      { name: 'Michelle', confirmation: false },
      { name: 'Tato', confirmation: false },
      { name: 'César', confirmation: false },
    ],
  },
  {
    name: 'Ángel Vargas',
    members: [{ name: 'Ángel Vargas', confirmation: false }],
  },
  {
    name: 'Familia Raya Renedo',
    members: [
      { name: 'Mamá Pera', confirmation: true },
      { name: 'Sofi', confirmation: true },
      { name: 'Lore', confirmation: true },
      { name: 'Iván', confirmation: true },
    ],
  },
  {
    name: 'Familia Renedo Quiroz',
    members: [
      { name: 'Tío Paco', confirmation: false },
      { name: 'Tía Irma', confirmation: false },
      { name: 'Sealtiel', confirmation: false },
    ],
  },
  {
    name: 'Gabo',
    members: [{ name: 'Gabo', confirmation: false }],
  },
  {
    name: 'Familia Renedo Beltrán',
    members: [
      { name: 'Tía Eri', confirmation: false },
      { name: 'Naomi', confirmation: false },
      { name: 'Nahím', confirmation: false },
      { name: 'Santi', confirmation: false },
    ],
  },
  {
    name: 'Familia Renedo Montes de Oca',
    members: [
      { name: 'Tío Godo', confirmation: false },
      { name: 'Tía Claudia', confirmation: false },
      { name: 'Citlali', confirmation: false },
      { name: 'Chucho', confirmation: false },
      { name: 'Juan Carlos', confirmation: false },
    ],
  },
  {
    name: 'Familia Tío Raúl',
    members: [
      { name: 'Tío Raúl', confirmation: false },
      { name: 'Esposa Tío Raúl', confirmation: false },
    ],
  },
  {
    name: 'Familia Raya Sánchez',
    members: [
      { name: 'Padrino Rubén', confirmation: false },
      { name: 'Angie', confirmation: false },
      { name: 'Javier', confirmation: false },
      { name: 'Mireya', confirmation: false },
    ],
  },
  {
    name: 'Familia Sánchez Raya',
    members: [
      { name: 'Tía Toña', confirmation: false },
      { name: 'Tía Elizabeth', confirmation: false },
      { name: 'Teddy', confirmation: false },
      { name: 'Fatima', confirmation: false },
      { name: 'Tía Laura', confirmation: false },
    ],
  },
  {
    name: 'Almita',
    members: [{ name: 'Almita', confirmation: false }],
  },
  {
    name: 'David',
    members: [{ name: 'David', confirmation: false }],
  },
  {
    name: 'Oscar B.',
    members: [{ name: 'Oscar', confirmation: false }],
  },
  {
    name: 'Victor',
    members: [{ name: 'Victor', confirmation: false }],
  },
  {
    name: 'Dianita',
    members: [{ name: 'Diana', confirmation: false }],
  },
  {
    name: 'Manu',
    members: [{ name: 'Manu', confirmation: false }],
  },
  {
    name: 'Familia Vázquez',
    members: [
      { name: 'Ana', confirmation: false },
      { name: 'Esposo Ana', confirmation: false },
      { name: 'Bebé Ana', confirmation: false },
    ],
  },
  {
    name: 'Gabo',
    members: [{ name: 'Gabo', confirmation: false }],
  },
  {
    name: 'Familia Martínez Raya',
    members: [
      { name: 'Lis', confirmation: true },
      { name: 'Poncho', confirmation: true },
    ],
  },
];

const generateSlug = (name: string) => {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
};

export const seed = async () => {
  try {
    for (const family of families) {
      const slug = generateSlug(family.name);
      const docRef = await addDoc(collection(db, 'families'), {
        slug,
        ...family,
      });
      console.log('Document written with ID: ', docRef.id);
    }
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};
