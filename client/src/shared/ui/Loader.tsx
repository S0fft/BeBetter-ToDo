import React from 'react';

import { createComponent } from '@lit/react';
import { MdCircularProgress } from '@material/web/all';

const Loader = createComponent({
  react: React,
  tagName: 'md-circular-progress',
  elementClass: MdCircularProgress,
});

export default Loader;
