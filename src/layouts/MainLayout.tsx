import { Outlet } from 'react-router';

export const MainLayout = () => {
  return (
    <main className="bg-primary text-dark font-sans">
      <div className="container mx-auto p-4 w-full max-w-2xl">
        <Outlet />
      </div>
    </main>
  );
};
