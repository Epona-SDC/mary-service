/* eslint-disable func-style */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
// import API from '../config.js';
// const axios = require('axios');
const appDom = document.querySelector('#thao');
// const config = API.GoogleAPI;

const { listingId } = window;

function imageSlideClick(className) {
  const el = document.querySelector('.' + className);
}

ReactDOM.render(<App listingId={listingId || 1000}/>, appDom);
