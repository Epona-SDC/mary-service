/* eslint-disable func-style */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import API from '../config.js';
const axios = require('axios');
const appDom = document.querySelector('#thao');
const config = API.GoogleAPI;
let areaData;
let hostData;

function imageSlideClick(className) {
  const el = document.querySelector('.' + className);
}


axios.get('http://localhost:3004/area', {
  params: {
    zip: '86205'
  }
})
  .then(res => {
    areaData = res.data[0];
  })
  .catch(err => console.log(err))
  .then(() => {
    axios.get('http://localhost:3004/host', {
      params: {
        zip: '86205'
      }
    })
      .then(res => {
        hostData = res.data[0];
      })
      .catch(err => console.log(err))
      .then(() => {
        ReactDOM.render(<App area={areaData} host={hostData} api={config}/>, appDom);
      });
  });


