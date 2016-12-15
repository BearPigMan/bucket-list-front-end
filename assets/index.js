'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./goals/events.js');

$(() => {
  authEvents.addHandlers();
  goalsEvents.addHandlers();
});
