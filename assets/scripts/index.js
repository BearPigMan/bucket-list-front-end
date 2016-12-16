'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const getMap = require('./maps/Map');

$(() => {
  setAPIOrigin(location, config);
});

const authEvents = require('./auth/events.js');
const goalEvents = require('./goals/events.js');

$(()=> {
  authEvents.addAuthHandlers();
  goalEvents.addHandlers();

  getMap(document.querySelector('#map'), {
    center: {
      lat: 42.3533642,
      lng: -71.057256
    }

, zoom:10})

  .then(map => setTimeout(()=>map.setZoom(18), 1600))
});
