import { useEffect, useState } from 'react';

import {
  useDeleteAllNotesMutation,
  useNotesQuery,
} from '@/entities/note/api/noteApi';
import Note from '@pages/Notes/ui/Note';
import {
  emptyTrashAnimation,
  layoutTransition,
  successAnimation,
} from '@pages/Trash/model/constants';
import MenuItems from '@pages/Trash/ui/MenuItems';
import { SNACKBAR_MESSAGE } from '@shared/lib/const';
import runAsync from '@shared/lib/helpers/runAsync';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import Icon from '@shared/ui/Icon';
import Loader from '@shared/ui/Loader';
import NotesList from '@shared/ui/NotesList';
import TextButton from '@shared/ui/TextButton';
import { AnimatePresence, motion } from 'framer-motion';

const Trash = () => {
  const { data: notes = [] } = useNotesQuery();
  const [deleteAllNotes, { isLoading, isSuccess }] =
    useDeleteAllNotesMutation();
  const snackbar = useSnackbar();
  const [showSuccess, setShowSuccess] = useState(false);

  const trashedNotes = notes.filter(({ is_trashed }) => is_trashed);
  const isTrashNotEmpty = trashedNotes.length !== 0;

  const isShowLoader = isTrashNotEmpty && isLoading;
  const isShowSuccess = !isTrashNotEmpty && showSuccess;
  const isShowEmptyTrash = isTrashNotEmpty && !isLoading && !isSuccess;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isSuccess) {
      setShowSuccess(true);
      timeout = setTimeout(() => setShowSuccess(false), 5000);
    }

    return () => clearTimeout(timeout);
  }, [isSuccess]);

  const handleEmptyTrash = async () => {
    const [error] = await runAsync(deleteAllNotes);

    if (error !== null) {
      snackbar.err(error);
      return;
    }

    snackbar.msg(SNACKBAR_MESSAGE.EMPTYED);
  };

  return (
    <NotesList
      preList={
        <article className="absolute left-1/2 flex h-[88px] w-full -translate-x-1/2 items-center justify-center gap-3 py-6 font-medium">
          <motion.h4
            className="inline-block"
            transition={layoutTransition}
            layout>
            Notes in Trash are deleted after 7 days.
          </motion.h4>
          <motion.div
            className="flex w-0 items-center transition-all duration-400 ease-bounce has-[div]:w-28"
            transition={layoutTransition}
            layout>
            <AnimatePresence mode="wait">
              {isShowLoader && (
                <motion.div
                  key="loader"
                  variants={successAnimation}
                  initial="hidden"
                  exit="hidden"
                  animate="visible"
                  className="inline-block"
                  layout>
                  <Loader
                    style={{
                      '--md-circular-progress-size': '24px',
                    }}
                    indeterminate
                  />
                </motion.div>
              )}
              {isShowEmptyTrash && (
                <motion.div
                  key="emptyTrash"
                  variants={emptyTrashAnimation}
                  initial="hidden"
                  exit="hidden"
                  animate="visible"
                  className="flex items-center justify-center"
                  layout>
                  <TextButton disabled={isLoading} onClick={handleEmptyTrash}>
                    Empty Trash
                  </TextButton>
                </motion.div>
              )}
              {isShowSuccess && (
                <motion.div
                  key="success"
                  variants={successAnimation}
                  initial="hidden"
                  exit="hidden"
                  animate="visible"
                  layout
                  className="flex items-center justify-center">
                  <Icon className="text-primary-fixed-dim">check</Icon>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </article>
      }
      notes={trashedNotes}
      emptyListIcon="delete"
      emptyListSubText="No notes in Trash"
      renderNote={(note, index) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          createdAt={note.time_created}
          isPinned={note.is_pinned}
          labels={note.labels}
          index={index}>
          <MenuItems noteId={note.id} />
        </Note>
      )}
    />
  );
};

export default Trash;
