import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <main className="grid h-dvh w-dvw place-items-center p-4">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
