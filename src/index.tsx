import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import Error from './components/error/error';
import FAVORITES from './mocks/favorites';
import OFFERS_NEARBY from './mocks/offers-nearby';
import OFFER from './mocks/offer';
import REVIEWS from './mocks/reviews';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Error/>
      <App favorites={FAVORITES} offersNearby={OFFERS_NEARBY} offer={OFFER} reviews={REVIEWS} />
    </Provider>
  </React.StrictMode>
);
