import { useDarkMode } from '@features/AppTheme';
import Switch from '@shared/ui/Switch';

const App = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <main className="mt-20 flex justify-center text-4xl text-on-surface">
      <Switch selected={isDarkMode} onInput={toggleDarkMode} />
    </main>
  );
};

export default App;
