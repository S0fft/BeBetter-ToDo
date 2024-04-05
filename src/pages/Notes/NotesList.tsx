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
    createdAt: '20.03.24',
    labels: ['Work'],
    isPinned: true,
  },
  {
    id: 1,
    title: 'Home tasks',
    content: '1. Buy milk\n2. Buy bread\n3. Buy potato\n4. Clear car',
    createdAt: '20.03.24',
    labels: ['Home', 'Study', 'Important'],
    isPinned: true,
  },
  {
    id: 2,
    title: 'Research and Development',
    content:
      '- Explored potential solutions for [specific issue].\n- Compiled a list of resources and references.\n- Initiated a prototype for [feature/component].',
    createdAt: getFormattedDate(new Date()),
    labels: ['Important', 'Work'],
    isPinned: true,
  },
  {
    id: 3,
    title: 'Miscellaneous',
    content:
      '- Attended training on React.\n- Completed mandatory compliance and security courses.\n- Organized team-building activity scheduled for [Date].',
    createdAt: getFormattedDate(new Date()),
    labels: ['Work', 'Study'],
    isPinned: false,
  },
  {
    id: 4,
    title: 'Miscellaneous',
    content:
      '- Attended training on React.\n- Completed mandatory compliance and security courses.\n- Organized team-building activity scheduled for [Date].',
    createdAt: getFormattedDate(new Date()),
    labels: ['Work', 'Study'],
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
