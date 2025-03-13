import { FC, useState } from 'react';

interface ILoginWithEmail {
  loginWithEmail: (email: string, password: string) => void;
}

export const LoginForm: FC<ILoginWithEmail> = ({ loginWithEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col items-center pt-20 h-screen">
      <h1 className="text-2xl font-bold text-center w-4/5">
        Panel de administración de invitados
      </h1>
      <input
        className="border border-gray-300 py-2 px-4 rounded-2xl mt-4 w-4/5 outline-none focus:outline focus:ring-2 focus:ring-primary"
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border border-gray-300 py-2 px-4 rounded-2xl mt-4 w-4/5 outline-none focus:outline focus:ring-2 focus:ring-primary"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-dark text-white p-2 rounded-2xl mt-4 w-4/5 outline-none focus:outline focus:ring-2 focus:ring-primary"
        onClick={() => loginWithEmail(email, password)}
      >
        Iniciar sesión
      </button>
    </div>
  );
};
