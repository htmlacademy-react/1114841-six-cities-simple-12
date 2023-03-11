import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { apartments } from './mocks/offers';
import { reviews } from './mocks/reviews';

const Setting = {
  PlacesCount: 312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesCount = {Setting.PlacesCount}
      reviews = {reviews}
      apartments = {apartments}
    />
  </React.StrictMode>,
);
