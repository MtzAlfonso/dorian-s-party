import { MdOutlinePhone, MdWhatsapp } from 'react-icons/md';
import { About, Details, HeroSection } from '../components';

export const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <About />

      {/* Event Details Section */}
      <Details />

      {/* Contact Section */}
      <section className="py-20 text-center px-4" id="contact">
        <h2 className="text-3xl font-bold">Contacto</h2>
        <p className="mt-4">
          Si tienes alguna duda, no dudes en llamarnos o escribirnos por
          WhatsApp.
        </p>
        <section className="flex items-center justify-center mt-4 gap-1">
          <a
            href="https://wa.link/4vb7al"
            target="_blank"
            rel="noreferrer"
            className="text-lg"
          >
            <MdWhatsapp className="text-3xl text-green-500" />
          </a>
          <a href="tel:5582984615" className="text-lg">
            <MdOutlinePhone className="text-3xl text-gray-500 mr-3" />
          </a>
          <p className="text-lg">55 8298 4615</p>
        </section>
        <section className="flex items-center justify-center mt-4 gap-2">
          <a
            href="https://wa.link/9349rm"
            target="_blank"
            rel="noreferrer"
            className="text-lg"
          >
            <MdWhatsapp className="text-3xl text-green-500" />
          </a>
          <a href="tel:5612652369" className="text-lg">
            <MdOutlinePhone className="text-3xl text-gray-500 mr-3" />
          </a>
          <p className="text-lg">56 1265 2369</p>
        </section>
      </section>
    </>
  );
};
