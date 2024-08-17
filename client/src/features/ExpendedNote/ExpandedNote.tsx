import { Dispatch, FC, SetStateAction } from 'react';

import Body from '@features/ExpendedNote/ui/Body';
import Controls from '@features/ExpendedNote/ui/Controls';
import Essentials from '@features/ExpendedNote/ui/Essentials';
import Header from '@features/ExpendedNote/ui/Header';
import { urlParams } from '@shared/lib/const';
import useUrl from '@shared/lib/hooks/useUrl';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';
import UserAvatar from '@shared/ui/UserAvatar';

type ExpandedNoteProps = {
  onExpand: Dispatch<SetStateAction<boolean>>;
};

const ExpandedNote: FC<ExpandedNoteProps> = ({ onExpand }) => {
  const { setUrl } = useUrl();

  const handleCollapseNote = () => {
    setUrl(urlParams.NOTE_ID);
    onExpand(false);
  };

  return (
    <>
      <Header>
        <UserAvatar className="size-[76px]" />
        <Essentials />
        <IconButton onClick={handleCollapseNote} className="ml-auto">
          <Icon>dock_to_left</Icon>
        </IconButton>
      </Header>
      <Body>
        <Controls />
      </Body>
    </>
  );
};

export default ExpandedNote;
