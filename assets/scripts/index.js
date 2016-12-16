'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const getMap = require('./maps/Map');
const {getGoals} = require('./goals/api');
const {createMarkerFromGoal} = require('./goals/toMap');

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
  }).then(function(map) {
    getGoals().then(goals => goals.goals.map(goal => {
      createMarkerFromGoal(goal, map)
    }))
  })

})
