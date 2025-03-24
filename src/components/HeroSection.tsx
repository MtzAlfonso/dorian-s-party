import follaje from '../assets/top-sheets.webp';
import bautizo from '../assets/bautizo.webp';
import { Countdown } from './Countdown';

export const HeroSection = () => {
  return (
    <section
      className="flex items-center justify-center text-center px-4 pb-18 mt-8"
      id="hero"
    >
      <img
        src={follaje}
        alt="follaje"
        className="absolute top-0 max-w-2xl w-full"
      />
      <div className="flex flex-col items-center">
        <h2 className="text-7xl font-display leading-26 mt-40">
          Dorian Nicolás
        </h2>
        <p className="text-2xl text-black mb-4">Mi Bautizo</p>
        <Countdown />
        <img src={bautizo} alt="bautizo" className="flex justify-center h-40" />
      </div>
    </section>
  );
};
