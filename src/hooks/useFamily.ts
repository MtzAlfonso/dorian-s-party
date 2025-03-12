import { doc, getDoc } from 'firebase/firestore';
import { useState, useCallback, useEffect } from 'react';
import { db } from '../config/firebase';
import { IFamily } from '../interfaces/firebase.interfaces';

export const useFamily = (id?: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [family, setFamily] = useState<IFamily>();

  const getFamily = useCallback(async (id?: string) => {
    try {
      // Usamos getDoc para obtener un documento específico
      const docRef = doc(db, 'families', id!);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setFamily(docSnap.data() as IFamily);
      } else {
        console.log('No existe este documento');
      }
    } catch (error) {
      console.error('Error obteniendo el documento: ', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getFamily(id);
  }, [id, getFamily]);

  return { family, isLoading };
};
