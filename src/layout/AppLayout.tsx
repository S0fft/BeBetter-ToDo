import { langs } from '@shared/lib/const';
import FilledTonalButton from '@shared/ui/FilledTonalButton';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  const { i18n } = useTranslation();

  const currLang = i18n.resolvedLanguage === langs.en ? langs.ru : langs.en;

  const handleLanguageSwitch = () => {
    void i18n.changeLanguage(currLang);
  };

  return (
    <main className="mt-20 flex justify-center text-4xl text-on-surface">
      <FilledTonalButton onClick={handleLanguageSwitch}>
        Change language
      </FilledTonalButton>
      <Outlet />
    </main>
  );
};

export default AppLayout;
