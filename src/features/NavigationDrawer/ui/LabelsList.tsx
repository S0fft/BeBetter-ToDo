import NavItem from '@features/NavigationDrawer/ui/NavItem';
import { mockLabels, routes } from '@shared/lib/const';

const LabelsList = () => {
  return (
    <ul className="pb-14">
      {mockLabels.map((label, i) => (
        <NavItem key={label.title} icon="label" to={`${routes.LABEL}/${i}`}>
          {label.title}
        </NavItem>
      ))}
    </ul>
  );
};

export default LabelsList;
