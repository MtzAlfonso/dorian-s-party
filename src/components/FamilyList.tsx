import { FC, useEffect } from 'react';
import { IFamily } from '../interfaces';
import { useCopyToClipboard } from 'react-use';
import Swal from 'sweetalert2';
import { generateTemplate } from '../utils';
import { MdCopyAll } from 'react-icons/md';
import { Link } from 'react-router';
import { Tag } from './Tag';

interface IFamilyListProps {
  title: string;
  families?: IFamily[];
}

export const FamilyList: FC<IFamilyListProps> = ({ title, families = [] }) => {
  const [state, copyToClipboard] = useCopyToClipboard();

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

  const handleCopy = (code: string) => {
    copyToClipboard(generateTemplate(code));
  };

  const totalMembers = families.reduce(
    (acc, family) =>
      acc + family.members.filter((member) => !member.isChildren).length,
    0
  );

  return (
    <section>
      <h2 className="text-4xl font-bold mb-4 text-center">
        {title} &#40;{totalMembers}&#41;
      </h2>
      <ul>
        {families?.map((family) => (
          <li key={family.id} className="pb-5">
            <h2 className="text-2xl font-bold">{family.name}</h2>
            <span>
              {family.members.length}{' '}
              {family.members.length === 1 ? 'invitado' : 'invitados'}
            </span>
            <section className="flex gap-1 items-center my-2">
              {family.tags
                ? family.tags?.map((tag) => (
                    <Tag key={tag} variant="info">
                      {tag}
                    </Tag>
                  ))
                : 'Sin etiquetas'}
            </section>
            <section className="flex gap-4 py-2 items-center">
              <p>Copiar invitación</p>
              <button
                className="cursor-pointer bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
                onClick={() => handleCopy(family.id)}
              >
                <MdCopyAll />
              </button>
            </section>
            <section className="pb-2">
              <Link
                to={{
                  pathname: '/invite',
                  search: `?code=${family.id}`,
                }}
              >
                <span className="text-blue-500 text-xs">Ver invitación</span>
              </Link>
            </section>

            <ul>
              {family.members.map((member) => (
                <li
                  key={member.name}
                  className="flex gap-2 pl-4 justify-between py-1"
                >
                  <span> - {member.name}</span>
                  <span>
                    {member.confirmation ? (
                      <Tag variant="success">Confirmado</Tag>
                    ) : (
                      <Tag variant="danger">No confirmado</Tag>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
