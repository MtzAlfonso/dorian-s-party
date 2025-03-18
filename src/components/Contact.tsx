import { MdWhatsapp } from 'react-icons/md';

export const Contact = () => {
  return (
    <section className="py-20 text-center px-4" id="contact">
      <h2 className="text-3xl font-bold">Contacto</h2>
      <p className="mt-4">
        Si tienes alguna duda, no dudes en llamarnos o escribirnos por WhatsApp.
      </p>
      <section className="flex items-center justify-center mt-4 gap-1">
        <a
          href="https://wa.link/4vb7al"
          target="_blank"
          rel="noreferrer"
          className="text-lg flex items-center gap-2"
        >
          <MdWhatsapp className="text-3xl text-green-500" />
          <p className="text-xl">55 8298 4615</p>
          <p className="text-md text-gray-400">&#40; Lisbet &#41;</p>
        </a>
      </section>
      <section className="flex items-center justify-center mt-4 gap-2">
        <a
          href="https://wa.link/9349rm"
          target="_blank"
          rel="noreferrer"
          className="text-lg flex items-center gap-2"
        >
          <MdWhatsapp className="text-3xl text-green-500" />
          <p className="text-xl">56 1265 2369</p>
          <p className="text-md text-gray-400">&#40; Alfonso &#41;</p>
        </a>
      </section>
    </section>
  );
};
