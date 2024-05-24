import { FC, RefObject, useEffect, useState } from 'react';

type FooterProps = {
  containerRef: RefObject<HTMLElement>;
};

const Footer: FC<FooterProps> = ({ containerRef }) => {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const isScroll =
      containerRef.current.offsetHeight < containerRef.current.scrollHeight;

    setIsScrolled(isScroll);
  }, [containerRef]);

  return (
    isScrolled && (
      <span className="!mt-6 flex w-full items-center justify-center text-sm text-on-surface-variant">
        You reached the end 🙂
      </span>
    )
  );
};

export default Footer;
