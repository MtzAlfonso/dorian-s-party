import { Link } from 'react-router';
import { useFamilies } from '../hooks/useFamilies';
import { motion } from 'framer-motion';
import { PieChart } from '../components/PieChart';
import { useAuth } from '../hooks/useAuth';
import { Loader, LoginForm } from '../components';

export const AdminPage = () => {
  const { user, loading, loginWithEmail } = useAuth();

  const baseUrl = window.location.origin;
  const { isLoading, families } = useFamilies();

  if (isLoading || loading) {
    return <Loader />;
  }

  if (!user) {
    return <LoginForm loginWithEmail={loginWithEmail} />;
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
      className="container mx-auto pt-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-5xl font-bold text-center pt-8">Invitados</h1>

      <section className="flex justify-center my-8 flex-col text-center text-xl">
        <p>Total de Invitados: {totalMembers}</p>
        <p>Confirmados: {confirmedMembers}</p>
        <PieChart confirm={confirmedMembers} total={totalMembers} />
      </section>

      <ul>
        {families.map((family) => (
          <li key={family.id} className="pb-5">
            <h2 className="text-2xl font-bold">{family.name}</h2>
            <section className="py-2">
              <Link
                to={{
                  pathname: '/',
                  search: `?code=${family.id}`,
                }}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                <span className="text-blue-500 text-xs">
                  {baseUrl}/?code={family.id}
                </span>
              </Link>
            </section>

            <ul>
              {family.members.map((member) => (
                <li
                  key={member.name}
                  className="flex gap-2 pl-4 justify-between py-1"
                >
                  <div>
                    <span>{flatMembers.indexOf(member) + 1}. </span>
                    <span>{member.name}</span>
                  </div>
                  <span>
                    {member.confirmation ? (
                      // Tags
                      <span className="border border-teal-500 text-teal-800 bg-teal-100 rounded-full px-2 py-1 text-xs">
                        Confirmado
                      </span>
                    ) : (
                      // Tags
                      <span className="border border-red-500 text-red-800 bg-red-100 rounded-full px-2 py-1 text-xs">
                        Sin confirmar
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};
