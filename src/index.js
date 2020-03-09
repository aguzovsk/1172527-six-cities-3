import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {hotels} from './mock/hotels';

const Settings = {
  hotels
};

const init = () => {
  const root = document.querySelector(`#root`);
  ReactDOM.render(<App hotels={Settings.hotels} />, root);
};

init();
