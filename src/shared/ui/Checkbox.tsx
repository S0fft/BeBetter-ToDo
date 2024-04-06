import React from 'react';

import { createComponent } from '@lit/react';
import { MdCheckbox } from '@material/web/all';

const Checkbox = createComponent({
  react: React,
  tagName: 'md-checkbox',
  elementClass: MdCheckbox,
});

export default Checkbox;
