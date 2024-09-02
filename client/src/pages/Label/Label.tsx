import { useParams } from 'react-router-dom';

import { mockLabels } from '../../../dev-data';

const Label = () => {
  // const notes = useAppSelector(selectNotes);
  const { labelId } = useParams();
  const activeLabel = mockLabels.at(Number(labelId));

  if (!activeLabel) throw new Error('No active label provided!');

  // const labelNotes = notes.filter(({ labels }) =>
  //   labels.some((label) => label.title === activeLabel.title),
  // );
  return <div>labels</div>;
  // <NotesList
  //   emptyListIcon="label"
  //   emptyListSubText="No notes with this label yet"
  //   notes={labelNotes}
  //   renderNote={() => {}}
  // />
};

export default Label;
