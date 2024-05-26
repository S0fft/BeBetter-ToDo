import React from 'react';

import { createComponent } from '@lit/react';
import { MdCheckbox } from '@material/web/all';

import { checkboxStyles } from '@pages/Notes/lib/const';

const CheckboxLit = createComponent({
  react: React,
  tagName: 'md-checkbox',
  elementClass: MdCheckbox,
});

const Checkbox = ({ ...props }) => {
  return <CheckboxLit {...props} style={checkboxStyles} />;
};

export default Checkbox;
