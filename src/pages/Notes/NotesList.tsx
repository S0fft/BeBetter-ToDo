import Note from '@pages/Notes/ui/Note';
import getFormattedDate from '@shared/lib/helpers/getFormattedDate';

const mockedNotes = [
  {
    id: 0,
    title: 'Work',
    content:
      '1. Discussed project milestones and deliverables.\n' +
      '2. Agreed on the next steps and assigned tasks.\n' +
      '3. Scheduled follow-up meeting for [Date].',
    createdAt: getFormattedDate(new Date()),
    labels: ['label 1', 'label 2', 'label 3', 'label 4'],
    isPinned: true,
  },
  {
    id: 1,
    title: 'Note 2',
    content: 'Note 2',
    createdAt: getFormattedDate(new Date()),
    labels: ['label 1', 'label 2', 'label 3', 'label 4'],
    isPinned: true,
  },
  {
    id: 2,
    title: 'Note 3',
    content: 'Note 3',
    createdAt: getFormattedDate(new Date()),
    labels: ['label 1', 'label 2', 'label 3', 'label 4'],
    isPinned: true,
  },
  {
    id: 3,
    title: 'Note 4',
    content: 'Note 4',
    createdAt: getFormattedDate(new Date()),
    labels: ['label 1', 'label 2', 'label 3', 'label 4'],
    isPinned: false,
  },
  {
    id: 4,
    title: 'Note 5',
    content: 'Note 5',
    createdAt: getFormattedDate(new Date()),
    labels: ['label 1', 'label 2', 'label 3', 'label 4'],
    isPinned: false,
  },
];

const NotesList = () => {
  return (
    // 92px -> main container padding 16px + 12px gap + 64px header height
    <ul className="h-[calc(100dvh_-_92px)] space-y-3 overflow-scroll rounded-xl pb-4">
      {mockedNotes.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          content={note.content}
          createdAt={note.createdAt}
          isPinned={note.isPinned}
          labels={note.labels}
        />
      ))}
    </ul>
  );
};

export default NotesList;
