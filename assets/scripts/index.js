'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const ui = require('./auth/ui.js');

const mapControl = require('./maps/Map');

$(() => {
  setAPIOrigin(location, config);
});

const authEvents = require('./auth/events.js');
// const goalEvents = require('./goals/events.js');

$(() => {


  mapControl.getMap(document.querySelector('#map'), {
    center: {
      lat: 42.2201,
      lng: -71.0589
    },
    zoom: 10
  })
  .then(() => {
    authEvents.addAuthHandlers();
    // goalEvents.addHandlers();
  })
  .catch(ui.failure);
});
