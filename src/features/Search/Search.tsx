import Icon from '@shared/ui/Icon';
import UserAvatar from '@shared/ui/UserAvatar';

const Search = () => {
  return (
    <>
      <input
        className="peer h-16 w-full rounded-full bg-surface pl-16 pr-3.5 text-on-surface outline-none transition-all duration-200 ease-standard-accelerate placeholder:text-on-surface-variant focus:-translate-y-0.5 focus:ring-4 focus:ring-high-contrast-inverse-primary focus:drop-shadow-md focus:ease-standard-decelerate"
        type="text"
        placeholder="Search notes"
      />
      <Icon className="absolute left-6 top-1/2 -translate-y-1/2 transition-transform ease-[inherit] peer-focus:-translate-y-[calc(50%+2px)]">
        search
      </Icon>
      <UserAvatar className="absolute right-4 top-1/2 size-9 -translate-y-1/2 hover:scale-105 hover:cursor-pointer hover:shadow-xl peer-focus:-translate-y-[calc(50%+2px)]" />
    </>
  );
};

export default Search;
