import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <main className="mt-20 flex justify-center text-4xl text-on-surface">
      <Outlet />
    </main>
  );
};

export default AppLayout;
