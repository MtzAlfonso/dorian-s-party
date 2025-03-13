import follaje from '../assets/top-sheets.webp';
import bautizo from '../assets/bautizo.webp';

export const HeroSection = () => {
  return (
    <section
      className="h-screen flex items-center justify-center text-center px-4"
      id="hero"
    >
      <img
        src={follaje}
        alt="follaje"
        className="absolute top-0 max-w-2xl w-full"
      />
      <div className="flex flex-col items-center">
        <h2 className="text-7xl font-display leading-28 mt-40">
          Dorian Nicolás
        </h2>
        <p className="mt-4 text-2xl text-black">Mi Bautizo 2025</p>
        <img src={bautizo} alt="bautizo" className="flex justify-center" />
      </div>
    </section>
  );
};
