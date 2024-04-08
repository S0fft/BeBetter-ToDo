import ExpandedNote from '@features/ExpendedNote/ExpandedNote';
import Search from '@features/Search/Search';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <main className="grid h-dvh grid-cols-[300px_1fr_1fr] grid-rows-1 gap-6 p-4 text-on-surface">
      <aside className="w-[300px]">sidebar</aside>
      <div className="grid grid-rows-[64px_1fr] gap-3">
        <header className="relative">
          <Search />
        </header>
        <section>
          <Outlet />
        </section>
      </div>
      <section className="grid grid-rows-[max-content_1fr] overflow-hidden rounded-xl">
        <ExpandedNote />
      </section>
    </main>
  );
};

export default AppLayout;
