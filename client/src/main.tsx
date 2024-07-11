import React from 'react';

import ReactDOM from 'react-dom/client';

import App from '@/App';
import { setupStore } from '@/store';
import { Provider } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import './locales/i18n';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
