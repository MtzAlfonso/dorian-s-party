import { seed } from '../config/seed';

export const LandingPage = () => {
  return (
    <>
      {/* Header Sticky */}
      <header className="fixed top-0 left-0 w-full bg-secondary drop-shadow-sm p-4 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          {import.meta.env.DEV && (
            <button
              className="text-xl font-bold bg-gold px-4 py-2 rounded-md
              hover:bg-gold-dark transition-colors"
              onClick={() => seed()}
            >
              SEED
            </button>
          )}
          <h1 className="text-xl font-bold">Mi Bautizo</h1>
          <ul className="flex gap-4">
            <li>
              <a href="#about" className="hover:text-gold">
                Sobre
              </a>
            </li>
            <li>
              <a href="#event" className="hover:text-gold">
                Evento
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-gold">
                Galería
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gold">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center text-center px-4"
        id="hero"
      >
        <div>
          <h2 className="text-9xl font-extrabold font-display">
            Dorian Nicolás
          </h2>
          <p className="mt-4 text-2xl text-black">Mi Bautizo 2025</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-accent text-center px-4" id="about">
        <h2 className="text-3xl font-bold">Sobre el Evento</h2>
        <p className="mt-4 text-black">
          Un día especial lleno de amor y fe para nuestro pequeño.
        </p>
      </section>

      {/* Event Details Section */}
      <section className="py-20 text-center px-4" id="event">
        <h2 className="text-3xl font-bold">Detalles del Evento</h2>
        <p className="mt-4 text-black">Fecha: 05 de Abril de 2025</p>
        <p className="text-black">
          Ubicación: Juan Cousin 48, Alfonso XIII, Álvaro Obregón
        </p>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-accent text-center px-4" id="gallery">
        <h2 className="text-3xl font-bold">Galería</h2>
        <p className="mt-4">Próximamente...</p>
      </section>

      {/* Contact Section */}
      <section className="py-20 text-center px-4" id="contact">
        <h2 className="text-3xl font-bold">Contacto</h2>
        <p className="mt-4">Para más información, contáctanos.</p>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-20 bg-accent text-center px-4" id="faq">
        <details className="mb-4">
          <summary className="text-xl font-bold">
            ¿Cuál es el código de vestimenta?
          </summary>
          <p className="mt-4">El código de vestimenta es formal.</p>
        </details>
        <details className="mb-4">
          <summary className="text-xl font-bold">
            ¿Puedo llevar a mi mascota?
          </summary>
          <p className="mt-4">No se permiten mascotas en el evento.</p>
        </details>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-center py-6">
        <p>&copy; 2025 Mi Bautizo. Todos los derechos reservados.</p>
      </footer>
    </>
  );
};
