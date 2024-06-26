import React from 'react';

import { createComponent } from '@lit/react';
import { MdIcon } from '@material/web/all';

const Icon = createComponent({
  react: React,
  tagName: 'md-icon',
  elementClass: MdIcon,
  events: {
    onChange: 'change',
    onClick: 'click',
  },
});

export default Icon;
