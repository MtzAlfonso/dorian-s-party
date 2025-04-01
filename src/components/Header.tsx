import { Link, useLocation, useSearchParams } from 'react-router';
import { MdHome, MdLogout } from 'react-icons/md';
import { useAuth } from '../hooks/useAuth';

export const Header = () => {
  const location = useLocation();
  const [params] = useSearchParams();
  const { user, logout } = useAuth();
  const code = params.get('code') || '';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isHome = location.pathname === '/';
  const isAuth = location.pathname === '/admin';

  return (
    <header className="fixed top-0 w-full max-w-2xl bg-warm drop-shadow-sm p-4 z-50 text-dark">
      <nav className="mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link
            to={{
              pathname: '/',
              search: code ? `?code=${code}` : undefined,
            }}
            className="hover:text-gold"
            onClick={scrollToTop}
          >
            <div className="border-2 border-primary rounded-full py-1 px-4 flex gap-2 items-center">
              <MdHome className="text-3xl inline" />
              {!isHome && <span className="text-sm">Volver al inicio</span>}
            </div>
          </Link>
        </h1>
        {isHome && (
          <ul className="flex gap-4">
            <li>
              <a href="#about" className="hover:text-accent">
                Información
              </a>
            </li>
            <li>
              <a href="#event" className="hover:text-accent">
                Detalles
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent">
                Contacto
              </a>
            </li>
          </ul>
        )}
        {isAuth && user && (
          <ul className="flex gap-4">
            <li>
              <button
                onClick={logout}
                className="bg-dark text-white py-2 px-4 rounded-full flex gap-2 items-center"
              >
                <MdLogout className="text-2xl inline" />
                <span>Salir</span>
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
