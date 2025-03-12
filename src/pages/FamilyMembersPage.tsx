import { useParams } from 'react-router';
import { useFamily } from '../hooks/useFamily';

export const FamilyMembersPage = () => {
  const { id } = useParams();

  const { family, isLoading } = useFamily(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!family) {
    return <div>El código de invitación no es válido</div>;
  }

  return (
    <div>
      <h1 className="text-6xl font-bold text-center">{family.name}</h1>
      <ul>
        {family.members.map((member) => (
          <li key={member.name}>
            <span>{member.name}</span>
            <span>{member.confirmation ? '✅' : '❌'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
