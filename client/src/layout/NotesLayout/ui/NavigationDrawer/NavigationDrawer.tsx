import { Dispatch, FC, SetStateAction } from 'react';

import { useCreateNoteMutation } from '@/entities/note/api/noteApi';
import LabelsList from '@layout/NotesLayout/ui/NavigationDrawer/ui/LabelsList';
import { routes, urlParams } from '@shared/lib/const';
import runAsync from '@shared/lib/helpers/runAsync';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import useUrl from '@shared/lib/hooks/useUrl';
import Fab from '@shared/ui/Fab';
import Icon from '@shared/ui/Icon';
import NavItem from '@shared/ui/NavItem';
import Tooltip from '@shared/ui/Tooltip';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { mockLabels } from '../../../../../dev-data';

type NavigationDrawerProps = {
  onExpandNote: Dispatch<SetStateAction<boolean>>;
};

const NavigationDrawer: FC<NavigationDrawerProps> = ({ onExpandNote }) => {
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const { setUrl } = useUrl();
  const [createNote] = useCreateNoteMutation();
  const { t } = useTranslation();

  const isLabelsExists = Boolean(mockLabels.length);

  const handleComposeNote = async () => {
    navigate(`/${routes.NOTES}`);

    const emptyNote = { title: '.', content: '.' };
    const [error, note] = await runAsync(createNote(emptyNote).unwrap);

    if (error === null) {
      setUrl(urlParams.NOTE_ID, note.id);
      onExpandNote(true);
    } else {
      snackbar.err(error);
    }
  };

  return (
    <>
      <h1 className="px-4 py-[18px] text-sm font-medium text-on-surface-variant">
        Todo
      </h1>
      <Tooltip placement="bottom" content={t('tooltips.create')}>
        <Fab
          onClick={handleComposeNote}
          label={t('sidebar.compose')}
          className="mb-12 w-full"
          variant="tertiary">
          <Icon slot="icon">mode_edit</Icon>
        </Fab>
      </Tooltip>
      <NavItem icon="lightbulb" to={`/${routes.NOTES}`}>
        {t('sidebar.notes')}
      </NavItem>
      <NavItem icon="collections_bookmark" to={routes.ARCHIVE}>
        {t('sidebar.archive')}
      </NavItem>
      <NavItem icon="delete" to={routes.TRASH}>
        {t('sidebar.Trash')}
      </NavItem>

      {isLabelsExists && (
        <>
          <hr className="border-t border-outline-variant" />
          <h3 className="px-4 py-[18px] text-sm font-medium text-on-surface-variant">
            {t('sidebar.labels')}
          </h3>
          <LabelsList />
        </>
      )}
    </>
  );
};

export default NavigationDrawer;
