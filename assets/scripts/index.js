'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const getMap = require('./maps/Map');
// const {getGoals} = require('./goals/api');
// const {convertToMarker} = require('./goals/goalToMarker');

$(() => {
  setAPIOrigin(location, config);
});

const authEvents = require('./auth/events.js');
const goalEvents = require('./goals/events.js');

$(() => {


  getMap(document.querySelector('#map'), {
    center: {
      lat: 42.2201,
      lng: -71.0589
    },
    zoom: 10
  })
  .then(() => {
    authEvents.addAuthHandlers();
    goalEvents.addHandlers();
  })
  .then(() => {
    $('#sign-in-password').val('1');
    $('#sign-in-email').val('test@test.com');
    $('.sign-in-form').trigger('submit');
    return undefined;
  });
});
