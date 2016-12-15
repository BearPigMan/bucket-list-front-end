'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

const authEvents = require('./auth/events.js');

$(()=>{
  authEvents.addAuthHandlers();
});
