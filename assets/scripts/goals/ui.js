'use strict';

const showGoalsTemplate = require('../templates/goal-listing.handlebars');

const getGoalsSuccess = (goals) => {
  $('#content').html(showGoalsTemplate(goals));
};

const postGoalSuccess = (goal) => {
  $('#content').html();
};



module.exports = {
  getGoalsSuccess,
  postGoalSuccess,
};
