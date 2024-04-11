import NavItem from '@features/NavigationDrawer/ui/NavItem';
import { routes } from '@shared/lib/const';
import Fab from '@shared/ui/Fab';
import Icon from '@shared/ui/Icon';

const NavigationDrawer = () => {
  return (
    <>
      <h1 className="px-4 py-[18px] text-sm font-medium text-on-surface-variant">
        Todo
      </h1>

      <Fab label="Compose" className="mb-12 w-full" variant="tertiary">
        <Icon slot="icon">mode_edit</Icon>
      </Fab>

      <NavItem icon="lightbulb" to={routes.NOTES}>
        Notes
      </NavItem>
      <NavItem icon="collections_bookmark" to={routes.ARCHIVE}>
        Archive
      </NavItem>
      <NavItem icon="delete" to={routes.TRASH}>
        Trash
      </NavItem>
    </>
  );
};

export default NavigationDrawer;
