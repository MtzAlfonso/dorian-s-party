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
    onConfirm(stateMember.name, confirmation);
    setStateMember({ ...stateMember, confirmation });
  };

  return (
    <article className="p-4 rounded-lg flex justify-between align-center bg-warm text-dark">
      {loading && <Loader />}
      <section>
        <h2 className="text-xl font-bold">{stateMember.name}</h2>

        <p className="mt-2">
          {stateMember.confirmation ? (
            <span className="text-dark">Confirmado</span>
          ) : (
            <span className="text-dark-red">Sin confirmar</span>
          )}
        </p>
      </section>

      <section className="flex gap-2 items-center justify-center">
        <button
          onClick={() => handleConfirmation(true)}
          className={twMerge([
            'p-2 h-10 w-14 rounded-full cursor-pointer flex justify-center items-center mx-auto',
            stateMember.confirmation
              ? 'bg-primary text-white hover:bg-dark'
              : 'border border-primary text-primary hover:dark hover:border-dark hover:text-dark',
          ])}
        >
          <MdCheck className="text-xl" />
        </button>
        <button
          onClick={() => handleConfirmation(false)}
          className={twMerge([
            'p-2 h-10 w-14 rounded-full cursor-pointer flex justify-center items-center mx-auto',
            stateMember.confirmation
              ? 'border border-red text-red hover:dark-red hover:border-dark-red hover:text-dark-red'
              : 'bg-red text-white hover:bg-dark-red',
          ])}
        >
          <MdClose className="text-xl" />
        </button>
      </section>
    </article>
  );
};
