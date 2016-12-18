'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const getMap = require('./maps/Map');
const {getGoals} = require('./goals/api');
const {convertToMarker} = require('./goals/goalToMarker');

$(() => {
  setAPIOrigin(location, config);
});

const authEvents = require('./auth/events.js');
const goalEvents = require('./goals/events.js');

$(() => {
  authEvents.addAuthHandlers();
  goalEvents.addHandlers();

  getMap(document.querySelector('#map'), {
    center: {
      lat: 59.325,
      lng: 18.070
    },
    zoom: 10
  }).then(map => {
    $('#sign-in-password').val('p');
    $('#sign-in-email').val('p@p');
    $('.sign-in-form').trigger('submit');

  });
});
