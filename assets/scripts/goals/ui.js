'use strict';

const showGoalsTemplate = require('../templates/goal-listing.handlebars');
const localGoals = require('./localGoals.js');

const getGoalsSuccess = (goals) => {
  $('#content').html(showGoalsTemplate(goals));
};

module.exports = {
  getGoalsSuccess,
};
