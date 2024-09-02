import BackButton from '@layout/NotesLayout/ui/NavigationDrawer/ui/BackButton';
import { routes } from '@shared/lib/const';
import NavItem from '@shared/ui/NavItem';
import { useTranslation } from 'react-i18next';

const NavigationDrawer = () => {
  const { t } = useTranslation();

  return (
    <nav className="px-3 pt-3">
      <BackButton />
      <NavItem to={routes.GENERAL}>
        {t('settings.navigationDrawer.general')}
      </NavItem>
      <NavItem to={routes.ACCOUNT}>
        {t('settings.navigationDrawer.account')}
      </NavItem>
    </nav>
  );
};

export default NavigationDrawer;
