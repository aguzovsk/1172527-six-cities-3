import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  PLACES_COUNT: 5,
};

const init = () => {
  const root = document.querySelector(`#root`);
  ReactDOM.render(<App placesCount={Settings.PLACES_COUNT} />, root);
};

init();
