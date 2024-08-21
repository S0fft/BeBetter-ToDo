import { Dispatch, FC, SetStateAction } from 'react';

import Body from '@features/ExpandedNote/ui/Body';
import Controls from '@features/ExpandedNote/ui/Controls';
import Essentials from '@features/ExpandedNote/ui/Essentials';
import Header from '@features/ExpandedNote/ui/Header';
import { urlParams } from '@shared/lib/const';
import useUrl from '@shared/lib/hooks/useUrl';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';
import Tooltip from '@shared/ui/Tooltip';
import UserAvatar from '@shared/ui/UserAvatar';
import { useTranslation } from 'react-i18next';

type ExpandedNoteProps = {
  onExpand: Dispatch<SetStateAction<boolean>>;
};

const ExpandedNote: FC<ExpandedNoteProps> = ({ onExpand }) => {
  const { setUrl } = useUrl();
  const { t } = useTranslation();

  const handleCollapseNote = () => {
    setUrl(urlParams.NOTE_ID);
    onExpand(false);
  };

  return (
    <>
      <Header>
        <UserAvatar className="size-[76px]" />
        <Essentials />
        <Tooltip content={t('tooltips.collapse')} placement="bottom">
          <IconButton onClick={handleCollapseNote} className="ml-auto">
            <Icon>dock_to_left</Icon>
          </IconButton>
        </Tooltip>
      </Header>
      <Body>
        <Controls />
      </Body>
    </>
  );
};

export default ExpandedNote;
