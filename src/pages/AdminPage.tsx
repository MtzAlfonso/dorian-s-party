import { useFamilies } from '../hooks/useFamilies';
import { motion } from 'framer-motion';
import { PieChart } from '../components/charts/PieChart';
import { useAuth } from '../hooks/useAuth';
import {
  DoughnutChart,
  FamilyList,
  GroupedBarChart,
  Loader,
  LoginForm,
} from '../components';
import { IFamily, IMember } from '../interfaces/firebase.interfaces';

interface IGrouppedFamilies {
  [key: string]: IFamilyGroup[];
}

interface IFamilyGroup {
  familyName: string;
  members: IMember[];
  totalMembers: number;
}

export const AdminPage = () => {
  const { user, loading, loginWithEmail } = useAuth();

  const {
    isLoading,
    families,
    confimartedFamilies,
    pendingFamilies,
    lisFamilies,
    lisFriends,
    ponchoFamilies,
    ponchoFriends,
  } = useFamilies();

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

  const groupedFamilies = confimartedFamilies?.reduce<IGrouppedFamilies>(
    (acc, family) => {
      const members = family.members.filter(isNotChildren).filter(isConfirmed);
      const membersCount = members.length;
      const familyName = family.name;

      if (membersCount === 0) return acc;

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
  const groupedFamiliesEntries = Object.entries(groupedFamilies || {});

  const totalConfirmatedMembersByTag = (families: IFamily[] = []) =>
    families
      ?.flatMap((family) => family.members.filter(isNotChildren))
      .filter(isConfirmed).length;

  const totalPendingMembersByTag = (families: IFamily[] = []) =>
    families
      ?.flatMap((family) => family.members.filter(isNotChildren))
      .filter((member) => !member.confirmation).length;

  const totalMembersByTag = (families: IFamily[] = []) =>
    families?.flatMap((family) => family.members.filter(isNotChildren)).length;

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

        <div className="flex justify-center py-8">
          <PieChart
            items={[confirmedMembers, totalMembers - confirmedMembers]}
            labels={['Confirmados', 'Pendientes']}
          />
        </div>
      </section>

      <hr className="py-8" />

      <section className="text-center">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Familias confirmadas</h2>
          <p>
            {confimartedFamilies?.length ?? 0} / {families.length} familias han
            confirmado
          </p>
        </div>

        <article>
          {groupedFamiliesEntries.map(([key, families]) => (
            <section key={key} className="pb-2 flex justify-center">
              <h3 className="flex gap-2">
                <strong className="text-xl font-bold">{families.length}</strong>
                <span>{families.length === 1 ? 'familia' : 'familias'} de</span>
                <strong className="text-xl font-bold">{key}</strong>
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

      <section>
        <h2 className="text-3xl font-bold text-center">
          Invitados por familia
        </h2>

        <PieChart
          items={[
            totalMembersByTag(lisFamilies),
            totalMembersByTag(lisFriends),
            totalMembersByTag(ponchoFamilies),
            totalMembersByTag(ponchoFriends),
          ]}
          labels={[
            'Familia Lis',
            'Amigos Lis',
            'Familia Poncho',
            'Amigos Poncho',
          ]}
          colors={['#E2BFD9', '#C8A1E0', '#134B70', '#508C9B']}
          legendPosition="left"
        />

        <GroupedBarChart
          labels={[
            'Familia Lis',
            'Amigos Lis',
            'Familia Poncho',
            'Amigos Poncho',
          ]}
          datasets={[
            {
              label: 'Pendientes',
              data: [
                totalPendingMembersByTag(lisFamilies),
                totalPendingMembersByTag(lisFriends),
                totalPendingMembersByTag(ponchoFamilies),
                totalPendingMembersByTag(ponchoFriends),
              ],
              backgroundColor: '#D70654',
              stack: 'stack1',
            },
            {
              label: 'Confirmados',
              data: [
                totalConfirmatedMembersByTag(lisFamilies),
                totalConfirmatedMembersByTag(lisFriends),
                totalConfirmatedMembersByTag(ponchoFamilies),
                totalConfirmatedMembersByTag(ponchoFriends),
              ],
              backgroundColor: '#9DC08B',
              stack: 'stack1',
            },
          ]}
        />
      </section>

      <hr className="my-8" />

      <FamilyList title="Confirmados" families={confimartedFamilies} />

      <hr className="my-8" />

      <FamilyList title="Pendientes" families={pendingFamilies} />
    </motion.section>
  );
};
