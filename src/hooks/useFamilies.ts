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

      setFamilies(members);
    } catch (error) {
      console.error('Error getting documents: ', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getFamilies();
  }, [getFamilies]);

  const confirmatedFamilies = families?.filter((family) =>
    family.members.some((member) => member.confirmation)
  );

  const sortedConfirmedFamilies = confirmatedFamilies?.toSorted((a, b) => {
    if (
      a.members.filter((member) => !member.isChildren).length >
      b.members.filter((member) => !member.isChildren).length
    ) {
      return -1;
    }
    if (
      a.members.filter((member) => !member.isChildren).length <
      b.members.filter((member) => !member.isChildren).length
    ) {
      return 1;
    }
    return a.name.localeCompare(b.name);
  });

  const pendingFamilies = families?.filter(
    (family) => !family.members.some((member) => member.confirmation)
  );

  const sortedPendingFamilies = pendingFamilies?.toSorted((a, b) => {
    if (
      a.members.filter((member) => !member.isChildren).length >
      b.members.filter((member) => !member.isChildren).length
    ) {
      return -1;
    }
    if (
      a.members.filter((member) => !member.isChildren).length <
      b.members.filter((member) => !member.isChildren).length
    ) {
      return 1;
    }
    return a.name.localeCompare(b.name);
  });

  const lisFamilies =
    families
      ?.filter((family) => family?.tags?.includes('LIS'))
      .filter((family) => family?.tags?.includes('FAMILIA')) || [];

  const lisFriends =
    families
      ?.filter((family) => family?.tags?.includes('LIS'))
      .filter((family) => family?.tags?.includes('AMIGOS')) || [];

  const ponchoFamilies =
    families
      ?.filter((family) => family?.tags?.includes('PONCHO'))
      .filter((family) => family?.tags?.includes('FAMILIA')) || [];

  const ponchoFriends =
    families
      ?.filter((family) => family?.tags?.includes('PONCHO'))
      .filter((family) => family?.tags?.includes('AMIGOS')) || [];

  return {
    families: [
      ...(sortedConfirmedFamilies || []),
      ...(sortedPendingFamilies || []),
    ],
    confimartedFamilies: sortedConfirmedFamilies,
    pendingFamilies: sortedPendingFamilies,
    lisFamilies,
    lisFriends,
    ponchoFamilies,
    ponchoFriends,
    isLoading,
  };
};
