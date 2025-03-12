import { collection, addDoc } from 'firebase/firestore';

// 80 invitados
// Familia Martínez Baeza
// 1. Mamá Alis
// 2. Papá Poncho
// 3. Ferchis
// Familia Martínez Beltrán
// 4. Iván
// 5. Hannia
// Familia David
// 6. David
// 7. Mamá David
// 8. Hermana David
// Familia Tía Elena
// 9. Tía Elena
// 10. Tío Roberto
// 11. Monis
// 12. Ernesto
// 13. Ezequiel
// Familia Tía Gise
// 14. Tía Gise
// 15. Acompañante Tía Gise
// Familia Tío Rubén
// 16. Tío Rubén
// 17. Tía Marce
// Familia Yose
// 18. Yoselin
// 19. Alex
// 20. Alma
// 21. Ricardo
// Tío Adolfo
// 22. Adolfo Martínez
// Bere
// 23. Berenice
// Vale Arreguin
// 24. Valería Arreguin
// 25. Acompañante Vale
// Familia Víctor
// 26. Víctor García
// 27. Marlén
// 28. Eren Gael
// Familia Tía Cris
// 29. Tía Cris
// 30. Tío Iván
// 31. Blanquita
// Abuelos
// 32. Abuela Ceci
// 33. Abuelo Daniel
// Familia Tía Chena
// 34. Tía Chena
// 35. Tío Gallo
// Familia Tía Dulce
// 36. Tía Dulce
// 37. Michelle
// 38. Tato
// 39. César
// Ángel Vargas
// 40. Ángel Vargas
// Familia Raya Renedo
// 41. Mamá Pera
// 42. Sofi
// 43. Lore
// 44. Iván
// Familia Renedo Quiroz
// 45. Tío Paco
// 46. Tía Irma
// 47. Sealtiel
// Gabo
// 48. Gabo
// Familia Renedo Beltrán
// 49. Tía Eri
// 50. Naomi
// 51. Nahím
// 52. Santi
// Familia Renedo Montes de Oca
// 53. Tío Godo
// 54. Tía Claudia
// 55. Citlali
// 56. Chucho
// 57. Juan Carlos
// Familia Tío Raúl
// 58. Tío Raúl
// 59. Esposa Tío Raúl
// Familia Raya Sánchez
// 60. Padrino Rubén
// 61. Angie
// 62. Javier
// 63. Mireya
// Familia Sánchez Raya
// 64. Tía Toña
// 65. Tía Elizabeth
// 66. Teddy
// 67. Fatima
// 68. Tía Laura
// Almita
// 69. Almita
// David
// 70. David
// Oscar B.
// 71. Oscar
// Victor
// 72. Victor
// Dianita
// 73. Diana
// Manu
// 74. Manu
// Familia Vázquez
// 75. Ana
// 76. Esposo Ana
// 77. Bebé Ana
// Gabo
// 78. Gabo
// Familia Martínez Raya
// 79. Lis
// 80. Poncho

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
    // Add a new document with a generated id.
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
