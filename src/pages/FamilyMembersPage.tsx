import { useParams } from 'react-router';
import { useFamily } from '../hooks/useFamily';
import { Card, Loader } from '../components';
import { motion } from 'framer-motion';

export const FamilyMembersPage = () => {
  const { id } = useParams();

  const { family, isLoading, updateFamily, isUpdating } = useFamily(id);

  const handleConfirmation = async (
    memberName: string,
    confirmation: boolean
  ) => {
    await updateFamily(id!, {
      ...family!,
      members: family!.members.map((member) =>
        member.name === memberName ? { ...member, confirmation } : member
      ),
    });
  };

  if (isLoading) return <Loader />;

  if (!family) {
    return (
      <motion.div
        className="flex items-center justify-center h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        El código de invitación no es válido
      </motion.div>
    );
  }

  return (
    <motion.section
      className="container mx-auto pt-20 px-4 min-h-screen bg-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-4xl leading-12 font-bold text-center">
        {family.name}
      </h1>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-8">
        {family.members.map((member) => (
          <Card
            key={member.name}
            member={member}
            onConfirm={handleConfirmation}
            loading={isUpdating}
          />
        ))}
      </ul>

      <p className="text-center my-8 text-xl italic text-red-600 w-5/6 mx-auto">
        Debido a la capacidad del evento, solo podrán asistir las personas
        indicadas en la invitación. Agradecemos su comprensión.
      </p>
    </motion.section>
  );
};
