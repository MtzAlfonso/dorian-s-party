import { Outlet } from 'react-router';
import { Header } from '../components';

export const MainLayout = () => {
  return (
    <main className="container bg-light text-primary font-sans w-full max-w-2xl mx-auto">
      <Header />
      <Outlet />
    </main>
  );
};
