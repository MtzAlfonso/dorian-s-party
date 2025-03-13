import {
  MdCalendarMonth,
  MdOutlineLocationOn,
  MdAccessTime,
} from 'react-icons/md';

export const Details = () => {
  return (
    <section className="py-20 text-center px-4" id="event">
      <h2 className="text-3xl font-bold mb-4">Detalles de la misa</h2>
      <p className="font-extrabold flex justify-center items-center gap-2">
        <MdCalendarMonth className="text-xl" />
        <span>FECHA:</span>
      </p>
      <p className=" text-black">05 de Abril de 2025</p>
      <p className="font-extrabold flex justify-center items-center gap-2 mt-2">
        <MdAccessTime className="text-xl" />
        <span>HORA:</span>
      </p>
      <p className=" text-black">12:30hrs</p>
      <p className="font-extrabold flex justify-center items-center gap-2 mt-2">
        <MdOutlineLocationOn className="text-xl" />
        <span>UBICACIÓN:</span>
      </p>
      <p className="text-black">Parroquia Monte Carmelo</p>
      <p className="text-black mb-10">
        Juan Cousin 48, Alfonso XIII, Álvaro Obregón
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.8527596732065!2d-99.20220264355125!3d19.37552713534367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201d203e38681%3A0x47b7b1e49a2b3cc2!2sParroquia%20Monte%20Carmelo!5e0!3m2!1ses-419!2smx!4v1741810494176!5m2!1ses-419!2smx"
        className="w-full h-80"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <h2 className="text-3xl font-bold mt-10 mb-4">
        Detalles de la recepción
      </h2>
      <p className="font-extrabold flex justify-center items-center gap-2">
        <MdCalendarMonth className="text-xl" />
        <span>FECHA:</span>
      </p>
      <p className="text-black">05 de Abril de 2025</p>
      <p className="font-extrabold flex justify-center items-center gap-2 mt-2">
        <MdAccessTime className="text-xl" />
        <span>HORA:</span>
      </p>
      <p className="text-black">14:30hrs</p>
      <p className="font-extrabold flex justify-center items-center gap-2 mt-2">
        <MdOutlineLocationOn className="text-xl" />
        <span>UBICACIÓN:</span>
      </p>
      <p className="text-black">Jardín 7</p>
      <p className="text-black mb-10">
        Cda. Rosa Roja 7, El Alfalfar, Álvaro Obregón
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.0562130726706!2d-99.19998979920344!3d19.3764109021841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2002e0c2e481b%3A0x6e4b11b87b67bef1!2sCda.%20de%20Rosa%20Roja%207%2C%20El%20Alfalfar%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001470%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1741824095666!5m2!1ses-419!2smx"
        className="w-full h-80"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};
