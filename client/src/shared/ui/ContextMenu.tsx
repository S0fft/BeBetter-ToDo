import { cloneElement, FC, MouseEvent, PropsWithChildren, useRef } from 'react';

import { Corner, MdMenu } from '@material/web/all';

import { dotButtonStyles, menuStyles } from '@pages/Notes/lib/const';
import FilledIconButton from '@shared/ui/FilledIconButton';
import Icon from '@shared/ui/Icon';
import Menu from '@shared/ui/Menu';

type ContextMenuProps = PropsWithChildren<{
  id: number | string;
  slot?: string;
  button?: JSX.Element;
  menuCorner?: Corner;
  anchorCorner?: Corner;
  yOffset?: number;
}>;

const ContextMenu: FC<ContextMenuProps> = ({
  id,
  button,
  children,
  menuCorner = Corner.START_END,
  anchorCorner = Corner.END_END,
  yOffset = 12,
  ...props
}) => {
  const menuRef = useRef<MdMenu>(null);
  const anchorId = `context-menu-${id}`;

  const handleMenuOpen = (e: MouseEvent) => {
    e.stopPropagation();

    if (menuRef.current?.open) {
      menuRef.current?.close();
      return;
    }

    menuRef.current?.show();
  };

  const btn = button ? (
    cloneElement(button, { onClick: handleMenuOpen, id: anchorId })
  ) : (
    <FilledIconButton
      id={anchorId}
      onClick={handleMenuOpen}
      style={dotButtonStyles}>
      <Icon>more_vert</Icon>
    </FilledIconButton>
  );

  return (
    <div {...props} className="relative">
      {btn}
      <Menu
        positioning="popover"
        has-overflow
        className="min-w-48"
        style={menuStyles}
        yOffset={yOffset}
        menuCorner={menuCorner}
        anchor-corner={anchorCorner}
        anchor={anchorId}
        ref={menuRef}>
        {children}
      </Menu>
    </div>
  );
};

export default ContextMenu;
