import BackButton from '@layout/NotesLayout/ui/NavigationDrawer/ui/BackButton';
import { routes } from '@shared/lib/const';
import NavItem from '@shared/ui/NavItem';

const NavigationDrawer = () => {
  return (
    <nav className="px-3 pt-3">
      <BackButton />
      <NavItem to={routes.GENERAL}>General</NavItem>
      <NavItem to={routes.ACCOUNT}>Account</NavItem>
    </nav>
  );
};

export default NavigationDrawer;
