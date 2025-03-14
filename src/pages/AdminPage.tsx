import { Link } from 'react-router';
import { useFamilies } from '../hooks/useFamilies';
import { motion } from 'framer-motion';
import { PieChart } from '../components/PieChart';
import { useAuth } from '../hooks/useAuth';
import { Loader, LoginForm } from '../components';
import { MdCopyAll } from 'react-icons/md';
import { useCopyToClipboard } from 'react-use';
import { generateTemplate } from '../utils';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

export const AdminPage = () => {
  const { user, loading, loginWithEmail } = useAuth();
  const [state, copyToClipboard] = useCopyToClipboard();

  const baseUrl = window.location.origin;
  const { isLoading, families } = useFamilies();

  useEffect(() => {
    if (state.value) {
      Swal.fire({
        icon: 'success',
        title: 'Mensaje copiado',
        text: 'El mensaje ha sido copiado al portapapeles',
        confirmButtonColor: '#56705e',
      });
    }
  }, [state]);

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

  const handleCopy = (code: string) => {
    copyToClipboard(generateTemplate(code));
  };

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
            <section className="flex gap-4 py-2 items-center">
              <p>Mensaje de invitación</p>
              <button
                className="cursor-pointer bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
                onClick={() => handleCopy(family.id)}
              >
                <MdCopyAll />
              </button>
            </section>
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
