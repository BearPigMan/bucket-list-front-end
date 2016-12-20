'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const getMap = require('./maps/Map');
const ui = require('./auth/ui.js');


$(() => {
  setAPIOrigin(location, config);
});

const authEvents = require('./auth/events.js');
const goalEvents = require('./goals/events.js');

$(() => {
  getMap(document.querySelector('#map'), {
    center: {
      lat: 59.325,
      lng: 18.070
    },
    zoom: 10
  })
  .then(() => {
    authEvents.addAuthHandlers();
    goalEvents.addHandlers();
  })
  .catch(ui.failure);
});
