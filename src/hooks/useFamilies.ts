import { useCallback, useEffect, useState } from 'react';
import { IFamily } from '../interfaces/firebase.interfaces';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

export const useFamilies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [families, setFamilies] = useState<IFamily[]>();

  const getFamilies = useCallback(async () => {
    try {
      const docRef = collection(db, 'families');
      const querySnapshot = await getDocs(docRef);
      const members = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as IFamily),
        id: doc.id,
      }));
      const sortedMembers = members.toSorted((a, b) =>
        a.name.localeCompare(b.name)
      );

      setFamilies(sortedMembers);
    } catch (error) {
      console.error('Error getting documents: ', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getFamilies();
  }, [getFamilies]);

  return {
    families,
    isLoading,
  };
};
