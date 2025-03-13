import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useState, useCallback, useEffect } from 'react';
import Swal from 'sweetalert2';
import { db } from '../config/firebase';
import { IFamily } from '../interfaces/firebase.interfaces';

export const useFamily = (id?: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [family, setFamily] = useState<IFamily>();

  const getFamily = useCallback(async (id?: string) => {
    try {
      setIsLoading(true);
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

  const updateFamily = useCallback(
    async (id: string, data: IFamily) => {
      try {
        setIsUpdating(true);
        // Usamos setDoc para actualizar un documento específico
        await setDoc(doc(db, 'families', id), data);
        Swal.fire({
          icon: 'success',
          title: 'Tu respuesta ha sido registrada',
          confirmButtonColor: '#56705e',
        });
        await getFamily(id);
      } catch (error) {
        console.error('Error actualizando el documento: ', error);
      } finally {
        setIsUpdating(false);
      }
    },
    [getFamily]
  );

  useEffect(() => {
    getFamily(id);
  }, [id, getFamily, updateFamily]);

  return { family, isLoading, updateFamily, isUpdating };
};
