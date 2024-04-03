import React, { FC, useLayoutEffect, useRef } from 'react';

import { createComponent } from '@lit/react';
import { MdSwitch } from '@material/web/switch/switch';

type SwitchProps = {
  onChange?: (e: Event) => void;
  selected?: boolean;
};

const SwitchLit = createComponent({
  react: React,
  tagName: 'md-switch',
  elementClass: MdSwitch,
  events: {
    onChange: 'change',
  },
});

const Switch: FC<SwitchProps> = ({ onChange, selected = false }) => {
  const switchRef = useRef<MdSwitch>(null);

  useLayoutEffect(() => {
    if (switchRef.current) switchRef.current.selected = selected;
  }, [selected]);

  return <SwitchLit ref={switchRef} onChange={onChange} />;
};

export default Switch;
