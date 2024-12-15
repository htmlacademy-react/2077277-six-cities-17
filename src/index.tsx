import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import OFFERS from './mocks/offers';
import FAVORITES from './mocks/favorites';
import OFFERS_NEARBY from './mocks/offers-nearby';
import OFFER from './mocks/offer';
import REVIEWS from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers = {OFFERS} favorites={FAVORITES} offersNearby={OFFERS_NEARBY} offer={OFFER} reviews={REVIEWS}/>
  </React.StrictMode>
);
