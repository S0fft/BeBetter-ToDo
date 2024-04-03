import Note from '@pages/Notes/ui/Note';

const NotesList = () => {
  return (
    // 92px -> main container padding 16px + 12px gap + 64px header height
    <ul className="h-[calc(100dvh_-_92px)] space-y-3 overflow-scroll rounded-xl pb-4">
      {Array.from({ length: 5 }, (_el, i) => (
        // 👇 The elements order will never change, so we can use index as a key
        <Note key={i} />
      ))}
    </ul>
  );
};

export default NotesList;
