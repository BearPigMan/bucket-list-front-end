'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

const authEvents = require('./auth/events.js');
const goalEvents = require('./goals/events.js');

$(()=>{
  authEvents.addAuthHandlers();
  goalEvents.addHandlers();
});
