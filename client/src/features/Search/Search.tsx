import { forwardRef } from 'react';

import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';

import searchFieldStyles from '@features/Search/lib/const';
import Icon from '@shared/ui/Icon';
import OutlinedTextField from '@shared/ui/OutlinedTextField';
import UserAvatar from '@shared/ui/UserAvatar';

const Search = forwardRef<MdOutlinedTextField>((_, ref) => {
  return (
    <OutlinedTextField
      ref={ref}
      style={searchFieldStyles}
      placeholder="Search notes"
      className="h-16 w-full max-w-[720px] rounded-full bg-surface pl-3 pr-2 text-on-surface outline-none transition-all duration-200 ease-emphasized-decelerate placeholder:text-on-surface-variant focus:-translate-y-0.5 focus:ring-4 focus:ring-high-contrast-inverse-primary focus:drop-shadow-md focus:ease-standard-decelerate">
      <Icon slot="leading-icon" className="transition-transform ease-[inherit]">
        search
      </Icon>
      <UserAvatar
        slot="trailing-icon"
        className="size-9 hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      />
    </OutlinedTextField>
  );
});

Search.displayName = 'Search';

export default Search;
