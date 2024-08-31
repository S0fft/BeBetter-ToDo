import { forwardRef, useEffect } from 'react';

import { Corner } from '@material/web/all';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';

import searchFieldStyles from '@features/Search/lib/const';
import { menuItemStyles } from '@pages/Notes/lib/const';
import { routes, urlParams } from '@shared/lib/const';
import cn from '@shared/lib/helpers/cn';
import useUrl from '@shared/lib/hooks/useUrl';
import ContextMenu from '@shared/ui/ContextMenu';
import Icon from '@shared/ui/Icon';
import MenuItem from '@shared/ui/MenuItem';
import OutlinedTextField from '@shared/ui/OutlinedTextField';
import UserAvatar from '@shared/ui/UserAvatar';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

type SearchProps = {
  className?: string;
};

const ESCAPE_KEY = 'Escape';
const ENTER_KEY = 'Enter';

const Search = forwardRef<MdOutlinedTextField, SearchProps>(
  ({ className }, ref) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { setUrl, readUrl } = useUrl();
    const location = useLocation();

    const currentPath = location.pathname;
    const searchQuery = readUrl(urlParams.SEARCH) ?? '';
    const isSettingsPage = currentPath.includes(routes.SETTINGS);

    const handleInput = (e: Event) => {
      if (isSettingsPage) {
        navigate(`/${routes.NOTES}`);
      }

      const target = e.target as HTMLInputElement;
      setUrl(urlParams.SEARCH, target.value || undefined);
    };

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        const { key } = e;
        const target =
          ref && 'current' in ref && (ref?.current as MdOutlinedTextField);
        const isInputFocused = document.activeElement === target;

        if (!target) return;

        if (isInputFocused && (key === ESCAPE_KEY || key === ENTER_KEY)) {
          target.blur();
        }

        if (!isInputFocused && key === ENTER_KEY) {
          target.focus();
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [ref]);

    return (
      <OutlinedTextField
        onInput={handleInput}
        value={searchQuery}
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
          tooltipContent={t('tooltips.userOptions')}
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
