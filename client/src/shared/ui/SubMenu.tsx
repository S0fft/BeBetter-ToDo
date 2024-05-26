import React from 'react';

import { createComponent } from '@lit/react';
import { MdSubMenu } from '@material/web/all';

const SubMenu = createComponent({
  react: React,
  tagName: 'md-sub-menu',
  elementClass: MdSubMenu,
});

export default SubMenu;
