import LabelsList from '@features/NavigationDrawer/ui/LabelsList';
import NavItem from '@features/NavigationDrawer/ui/NavItem';
import { noteAdded } from '@pages/Notes/slice';
import { mockLabels, routes, urlParams } from '@shared/lib/const';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import useUrl from '@shared/lib/hooks/useUrl';
import selectNotesNum from '@shared/lib/selectors/selectNotesNum';
import Fab from '@shared/ui/Fab';
import Icon from '@shared/ui/Icon';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NavigationDrawer = () => {
  const navigate = useNavigate();
  const { setUrl } = useUrl();
  const dispatch = useDispatch();
  const notesNum = useAppSelector(selectNotesNum);

  const isLabelsExists = Boolean(mockLabels.length);

  const handleComposeNote = () => {
    navigate(routes.NOTES);

    const createdAt = new Date().toDateString();
    dispatch(
      noteAdded({
        title: '',
        content: '',
        labels: [],
        createdAt,
        isPinned: false,
        isArchived: false,
        isTrashed: false,
      }),
    );

    setUrl(urlParams.NOTE_ID, notesNum);
  };

  return (
    <>
      <h1 className="px-4 py-[18px] text-sm font-medium text-on-surface-variant">
        Todo
      </h1>
      <Fab
        onClick={handleComposeNote}
        label="Compose"
        className="mb-12 w-full"
        variant="tertiary">
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

      {isLabelsExists && (
        <>
          <hr className="border-t border-outline-variant" />
          <h3 className="px-4 py-[18px] text-sm font-medium text-on-surface-variant">
            Labels
          </h3>
          <LabelsList />
        </>
      )}
    </>
  );
};

export default NavigationDrawer;
