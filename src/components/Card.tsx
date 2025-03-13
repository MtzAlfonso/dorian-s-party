import { FC, useState } from 'react';
import { IMember } from '../interfaces/firebase.interfaces';
import { MdCheck, MdClose } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { Loader } from './Loader';

interface ICardProps {
  member: IMember;
  onConfirm: (memberName: string, confirmation: boolean) => void;
  loading?: boolean;
}

export const Card: FC<ICardProps> = ({ member, onConfirm, loading }) => {
  const [stateMember, setStateMember] = useState<IMember>(member);

  const handleConfirmation = (confirmation: boolean) => {
    if (stateMember.confirmation === confirmation) return;
    onConfirm(stateMember.name, confirmation);
    setStateMember({ ...stateMember, confirmation });
  };

  return (
    <article className="p-4 rounded-lg flex justify-between align-center bg-warm text-dark">
      {loading && <Loader />}
      <section>
        <h2 className="text-xl font-bold">{stateMember.name}</h2>

        <p className="mt-2">
          {stateMember.confirmation ? 'Confirmado' : 'Sin confirmar'}
        </p>
      </section>

      <section className="flex gap-4 items-center justify-center">
        <button
          onClick={() => handleConfirmation(true)}
          className={twMerge([
            'p-2 h-10 w-10 rounded-md cursor-pointer',
            stateMember.confirmation
              ? 'bg-teal-600 text-white hover:bg-teal-700'
              : 'border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text',
          ])}
        >
          <MdCheck className="text-xl" />
        </button>
        <button
          onClick={() => handleConfirmation(false)}
          className={twMerge([
            'p-2 h-10 w-10 rounded-md cursor-pointer',
            stateMember.confirmation
              ? 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-red-600'
              : 'bg-red-600 text-white hover:bg-red-700',
          ])}
        >
          <MdClose className="text-xl" />
        </button>
      </section>
    </article>
  );
};
