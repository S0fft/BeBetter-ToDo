import AddLabel from '@layout/NotesLayout/ui/NavigationDrawer/ui/AddLabel';
import Details from '@layout/NotesLayout/ui/NavigationDrawer/ui/LabelDetails';
import LabelItem from '@layout/NotesLayout/ui/NavigationDrawer/ui/LabelItem';
import { routes } from '@shared/lib/const';

import { mockLabels } from '../../../../../../dev-data';

const LabelsList = () => {
  return (
    <ul className="pb-14">
      {mockLabels.map((label, i) => (
        <LabelItem id={i} key={label.title} to={`${routes.LABEL}/${i}`}>
          <span className="truncate group-hover:pe-8 [&:has(+_article_.visible)]:pe-8">
            {label.title}
          </span>
          <Details id={i} />
        </LabelItem>
      ))}
      <AddLabel />
    </ul>
  );
};

export default LabelsList;
