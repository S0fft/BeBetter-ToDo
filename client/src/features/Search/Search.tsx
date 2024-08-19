import { forwardRef } from 'react';

import { Corner } from '@material/web/all';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';

import searchFieldStyles from '@features/Search/lib/const';
import { menuItemStyles } from '@pages/Notes/lib/const';
import { routes } from '@shared/lib/const';
import cn from '@shared/lib/helpers/cn';
import ContextMenu from '@shared/ui/ContextMenu';
import Icon from '@shared/ui/Icon';
import MenuItem from '@shared/ui/MenuItem';
import OutlinedTextField from '@shared/ui/OutlinedTextField';
import UserAvatar from '@shared/ui/UserAvatar';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type SearchProps = {
  className?: string;
};

const Search = forwardRef<MdOutlinedTextField, SearchProps>(
  ({ className }, ref) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
      <OutlinedTextField
        ref={ref}
        style={searchFieldStyles}
        placeholder={t('search.placeholder')}
        className={cn(
          'h-16 w-full max-w-[720px] rounded-full bg-surface pl-3 pr-2 text-on-surface outline-none transition-all duration-200 ease-emphasized-decelerate placeholder:text-on-surface-variant focus:-translate-y-0.5 focus:ring-4 focus:ring-high-contrast-inverse-primary focus:drop-shadow-md focus:ease-standard-decelerate',
          className,
        )}>
        <Icon
          slot="leading-icon"
          className="transition-transform ease-[inherit]">
          search
        </Icon>
        <ContextMenu
          anchorCorner={Corner.START_START}
          menuCorner={Corner.END_START}
          yOffset={5}
          slot="trailing-icon"
          button={
            <UserAvatar
              slot="trailing-icon"
              className="size-9 hover:scale-105 hover:cursor-pointer hover:shadow-xl"
            />
          }
          id="user">
          <MenuItem
            onClick={() => navigate(`/${routes.SETTINGS}`)}
            style={menuItemStyles}
            className="mx-2 rounded-md">
            {t('settings.navigationDrawer.general')}
            <Icon slot="end" className="text-on-surface">
              settings
            </Icon>
          </MenuItem>
          <MenuItem
            onClick={() => navigate(`/${routes.SETTINGS}/${routes.ACCOUNT}`)}
            style={menuItemStyles}
            className="mx-2 rounded-md">
            {t('settings.navigationDrawer.account')}
            <Icon slot="end" className="text-on-surface">
              account_circle
            </Icon>
          </MenuItem>
        </ContextMenu>
      </OutlinedTextField>
    );
  },
);

Search.displayName = 'Search';

export default Search;
