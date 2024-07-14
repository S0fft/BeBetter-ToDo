import { Dispatch, FC, SetStateAction } from 'react';

import { useCreateNoteMutation } from '@/entities/note/api/noteApi';
import LabelsList from '@features/NavigationDrawer/ui/LabelsList';
import NavItem from '@features/NavigationDrawer/ui/NavItem';
import { routes, urlParams } from '@shared/lib/const';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import useUrl from '@shared/lib/hooks/useUrl';
import Fab from '@shared/ui/Fab';
import Icon from '@shared/ui/Icon';
import { useNavigate } from 'react-router-dom';

import { mockLabels } from '../../../dev-data';

type NavigationDrawerProps = {
  onExpandNote: Dispatch<SetStateAction<boolean>>;
};

const NavigationDrawer: FC<NavigationDrawerProps> = ({ onExpandNote }) => {
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const { setUrl } = useUrl();
  const [createNote] = useCreateNoteMutation();

  const isLabelsExists = Boolean(mockLabels.length);

  const handleComposeNote = async () => {
    try {
      navigate(`/${routes.NOTES}`);

      const emptyNote = { title: '.', content: '.' };
      const note = await createNote(emptyNote).unwrap();

      setUrl(urlParams.NOTE_ID, note.id);
      onExpandNote(true);
    } catch (e) {
      snackbar.err(e);
    }
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
      <NavItem icon="lightbulb" to={`/${routes.NOTES}`}>
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
