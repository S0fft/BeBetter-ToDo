import { Dispatch, FC, SetStateAction } from 'react';

import Body from '@features/ExpendedNote/ui/Body';
import Content from '@features/ExpendedNote/ui/Content';
import Controls from '@features/ExpendedNote/ui/Controls';
import Essentials from '@features/ExpendedNote/ui/Essentials';
import Header from '@features/ExpendedNote/ui/Header';
import Title from '@features/ExpendedNote/ui/Title';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';
import UserAvatar from '@shared/ui/UserAvatar';

type ExpandedNoteProps = {
  onExpand: Dispatch<SetStateAction<boolean>>;
};

const ExpandedNote: FC<ExpandedNoteProps> = ({ onExpand }) => {
  return (
    <>
      <Header>
        <UserAvatar className="size-[76px]" />
        <Essentials />
        <IconButton onClick={() => onExpand(false)} className="ml-auto">
          <Icon>dock_to_left</Icon>
        </IconButton>
      </Header>
      <Body>
        <Title />
        <Content />
        <Controls />
      </Body>
    </>
  );
};

export default ExpandedNote;
