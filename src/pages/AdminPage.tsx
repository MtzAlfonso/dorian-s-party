import { Link } from 'react-router';
import { useFamilies } from '../hooks/useFamilies';
import { motion } from 'framer-motion';
import { PieChart } from '../components/PieChart';

export const AdminPage = () => {
  const baseUrl = window.location.origin;
  const { isLoading, families } = useFamilies();

  if (isLoading) {
    return (
      <motion.div
        className="h-screen flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Cargando...
      </motion.div>
    );
  }

  if (!families) {
    return <div>No se pudo cargar la información</div>;
  }

  const flatMembers = families.flatMap((family) => family.members);
  const totalMembers = flatMembers.length;
  const confirmedMembers = flatMembers.filter(
    (member) => member.confirmation
  ).length;

  return (
    <motion.section
      className="container mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-6xl font-bold text-center pt-8">Familias</h1>

      <section className="flex justify-center my-8 flex-col text-center">
        <p>Total de Invitados: {totalMembers}</p>
        <p>Confirmados: {confirmedMembers}</p>
        <PieChart confirm={confirmedMembers} total={totalMembers} />
      </section>

      <ul>
        {families.map((family) => (
          <li key={family.id} className="pb-5">
            <h2 className="text-2xl font-bold">{family.name}</h2>
            <section className="py-2">
              <Link to={`/${family.id}`} className="text-blue-500 ">
                {baseUrl}/{family.id}
              </Link>
            </section>

            <ul>
              {family.members.map((member) => (
                <li key={member.name} className="flex gap-2 pl-4">
                  <span>{flatMembers.indexOf(member) + 1}. </span>
                  <span>{member.name}</span>
                  <span>{member.confirmation ? '✅' : '❌'}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};
