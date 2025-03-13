export const About = () => {
  return (
    <section className="py-24 px-6 text-center bg-dark text-light" id="about">
      <h2 className="text-4xl font-bold">¡Hola!</h2>
      <p className="mt-6 text-lg text-light">
        Nos llena de alegría compartir contigo un momento tan especial: el
        bautizo de nuestro pequeño
        <span className="font-extrabold text-white"> Dorian Nicolás</span>. La
        misa será la parte más importante de esta celebración, y nos encantaría
        contar con tu presencia. ¡Esperamos verte ahí!
      </p>

      <p className="mt-4 text-lg text-light">
        Antes de comenzar la misa, estaremos entregando los boletos para el
        salón, así todos podremos disfrutar juntos de la ceremonia y después
        continuar con la celebración.
      </p>

      {/* Cita Bíblica */}
      <blockquote className="mt-12 mx-auto max-w-2xl px-6 py-4 border-l-4 border-accent bg-light text-gray-800 italic text-lg rounded-lg shadow-md">
        “Porque de tal manera amó Dios al mundo, que ha dado a su Hijo
        unigénito, para que todo aquel que en él cree no se pierda, sino que
        tenga vida eterna.”
        <span className="block mt-2 text-right font-semibold text-dark">
          — Juan 3:16
        </span>
      </blockquote>

      <p className="mt-6 text-lg text-light">
        No olvides confirmar tu asistencia para poder reservar tu lugar en la
        recepción.
      </p>
      <p className="mt-6 text-3xl text-light font-bold cursor-pointer">
        ¡Te esperamos!
      </p>
    </section>
  );
};
