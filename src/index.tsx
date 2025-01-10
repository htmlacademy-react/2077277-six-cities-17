import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import Error from './components/error/error';
import FAVORITES from './mocks/favorites';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Error/>
      <App favorites={FAVORITES} />
    </Provider>
  </React.StrictMode>
);
