import { Link, useLocation } from 'react-router';
import { MdHome, MdLogout } from 'react-icons/md';
import { useAuth } from '../hooks/useAuth';

export const Header = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

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
          <Link to="/" className="hover:text-gold" onClick={scrollToTop}>
            <div className="border-2 border-primary rounded-full py-1 px-4 flex gap-2 items-center">
              <MdHome className="text-3xl inline" />
              {!isHome && <span className="text-sm">Más información</span>}
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
                className="bg-primary text-white p-2 rounded-lg flex gap-2 items-center"
              >
                <MdLogout className="text-xl" />
                <span>Cerrar sesión</span>
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
