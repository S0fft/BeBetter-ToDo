import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <main className="grid h-dvh grid-cols-[300px_1fr_1fr] grid-rows-1 gap-6 p-4 text-4xl text-on-surface">
      <section className="w-[300px]">sidebar</section>
      <div className="grid grid-rows-[64px_1fr] gap-3">
        <section>header</section>
        <section>
          <Outlet />
        </section>
      </div>
      <section>open note</section>
    </main>
  );
};

export default AppLayout;
