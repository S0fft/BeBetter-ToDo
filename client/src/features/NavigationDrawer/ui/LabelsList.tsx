import { routes } from '@shared/lib/const';
import NavItem from '@shared/ui/NavItem';

import { mockLabels } from '../../../../dev-data';

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
