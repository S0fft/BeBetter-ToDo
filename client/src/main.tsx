import React from 'react';

import { setupListeners } from '@reduxjs/toolkit/query';
import ReactDOM from 'react-dom/client';

import App from '@/App';
import { setupStore } from '@/store';
import { Provider } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/tippy.css';
import './index.css';
import './locales/i18n';

const store = setupStore();

setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
