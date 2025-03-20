import { useFamilies } from '../hooks/useFamilies';
import { motion } from 'framer-motion';
import { PieChart } from '../components/PieChart';
import { useAuth } from '../hooks/useAuth';
import { DoughnutChart, FamilyList, Loader, LoginForm } from '../components';
import { IMember } from '../interfaces/firebase.interfaces';

export const AdminPage = () => {
  const { user, loading, loginWithEmail } = useAuth();

  const { isLoading, families, confimartedFamilies, pendingFamilies } =
    useFamilies();

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

  const isNotChildren = (member: IMember) => !member.isChildren;
  const isConfirmed = (member: IMember) => member.confirmation;

  const totalMembers = flatMembers.filter(isNotChildren).length;
  const confirmedMembers = flatMembers
    .filter(isNotChildren)
    .filter(isConfirmed).length;

  interface IGrouppedFamilies {
    [key: string]: IFamily[];
  }

  interface IFamily {
    familyName: string;
    members: IMember[];
    totalMembers: number;
  }

  const groupedFamilies = confimartedFamilies?.reduce<IGrouppedFamilies>(
    (acc, family) => {
      const members = family.members.filter(isNotChildren).filter(isConfirmed);
      const membersCount = members.length;
      const familyName = family.name;

      if (membersCount === 0) {
        return acc;
      }

      if (!acc[membersCount]) {
        acc[membersCount] = [];
      }

      acc[membersCount].push({
        familyName,
        members,
        totalMembers: membersCount,
      });

      return acc;
    },
    {}
  );

  const groupedFamiliesLabels = Object.keys(groupedFamilies || {});
  const groupedFamiliesItems = Object.values(groupedFamilies || {}).map(
    (families) => families.length
  );
  const groupedFamiliesEntries = Object.entries(
    groupedFamilies || {}
  ).reverse();

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

      <section className="text-center">
        <hr className="mb-8" />
        <h2 className="text-2xl font-bold mb-4">Grupos de confirmados</h2>
        <article>
          {groupedFamiliesEntries.map(([key, families]) => (
            <section key={key} className="pb-2 flex justify-center">
              <h3 className="flex gap-2">
                <strong className="text-xl font-bold">{families.length}</strong>
                <span>familias de</span>
                <strong className="text-xl font-bold">
                  {families[0].totalMembers}
                </strong>
                <span>{key === '1' ? 'persona' : 'personas'}</span>
              </h3>
            </section>
          ))}
        </article>
        <DoughnutChart
          title="Confirmadas"
          labels={groupedFamiliesLabels.map((label) => `Familia de ${label}`)}
          items={groupedFamiliesItems}
        />
        <hr className="my-8" />
      </section>

      <FamilyList title="Confirmados" families={confimartedFamilies} />
      <hr className="my-8" />
      <FamilyList title="Pendientes" families={pendingFamilies} />
    </motion.section>
  );
};
