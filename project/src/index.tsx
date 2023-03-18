import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers, CITY } from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      reviews = {reviews}
      offers = {offers}
      city = {CITY}
    />
  </React.StrictMode>,
);
