import Search from '@features/Search/Search';
import NavigationDrawer from '@layout/SettingsLayout/ui/NavigationDrawer';
import { Outlet } from 'react-router-dom';

const SettingsLayout = () => {
  return (
    <div className="grid h-dvh grid-cols-[276px_1fr]">
      <NavigationDrawer />
      <section className="grid grid-rows-[max-content_1fr] justify-items-center gap-3 overflow-hidden pb-4 pr-4">
        <Search className="mt-4" />
        <main className="h-full w-full overflow-hidden">
          <div className="h-full w-full animate-fade-in-section overflow-y-scroll rounded-3xl bg-surface-container px-9 pb-10 pt-7">
            <div className="max-w-3xl space-y-10">
              <Outlet />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default SettingsLayout;
