import {
  ButtonHTMLAttributes,
  createContext,
  Dispatch,
  MouseEvent,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import cn from '@shared/lib/helpers/cn';
import Icon from '@shared/ui/Icon';

type ButtonProps = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    id: string;
  };

type TSegmentedButtonContext = {
  activeButton: string;
  setActiveButton: Dispatch<SetStateAction<string>>;
};

type SegmentedButtonProps = PropsWithChildren & {
  value: string;
  onChange: (value: string) => void;
};

const SegmentedButtonContext = createContext<TSegmentedButtonContext>({
  activeButton: '0',
  setActiveButton: () => {},
});

const Button = ({ children, onClick, id }: ButtonProps) => {
  const { activeButton, setActiveButton } = useContext(SegmentedButtonContext);

  const isActive = activeButton === id;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    setActiveButton(id);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={cn(
        'flex w-[104px] items-center justify-center gap-[10px] border-r border-r-outline text-on-surface transition-all duration-200 hover:bg-outline-variant',
        {
          'bg-secondary-container': isActive,
        },
      )}>
      {isActive && <Icon>check</Icon>}
      {children}
    </button>
  );
};

const SegmentedButton = ({
  children,
  value,
  onChange,
}: SegmentedButtonProps) => {
  const [activeButton, setActiveButton] = useState(value);

  const contextValue = useMemo(
    () => ({ activeButton, setActiveButton }),
    [activeButton],
  );

  useEffect(() => {
    onChange(activeButton);
  }, [onChange, activeButton]);

  return (
    <SegmentedButtonContext.Provider value={contextValue}>
      <div className="grid items-center justify-between">
        <div className="flex h-[40px] overflow-hidden rounded-3xl border border-outline text-sm font-[500] sm:mt-0">
          {children}
        </div>
      </div>
    </SegmentedButtonContext.Provider>
  );
};

SegmentedButton.Button = Button;

export default SegmentedButton;
