import { FC, MouseEvent, PropsWithChildren, useRef } from 'react';

import { Corner, MdMenu } from '@material/web/all';

import { dotButtonStyles, menuStyles } from '@pages/Notes/lib/const';
import FilledIconButton from '@shared/ui/FilledIconButton';
import Icon from '@shared/ui/Icon';
import Menu from '@shared/ui/Menu';

type ContextMenuProps = PropsWithChildren<{
  noteId: number;
}>;

const ContextMenu: FC<ContextMenuProps> = ({ noteId, children }) => {
  const menuRef = useRef<MdMenu>(null);
  const anchorId = `noteLabelsContextMenu-${noteId}`;

  const handleMenuOpen = (e: MouseEvent) => {
    e.stopPropagation();
    menuRef.current?.show();
  };

  return (
    <div className="relative">
      <FilledIconButton
        id={anchorId}
        onClick={handleMenuOpen}
        style={dotButtonStyles}>
        <Icon>more_vert</Icon>
      </FilledIconButton>
      <Menu
        positioning="popover"
        has-overflow
        className="min-w-48"
        style={menuStyles}
        yOffset={12}
        menuCorner={Corner.START_END}
        anchor-corner={Corner.END_END}
        anchor={anchorId}
        ref={menuRef}>
        {children}
      </Menu>
    </div>
  );
};

export default ContextMenu;
