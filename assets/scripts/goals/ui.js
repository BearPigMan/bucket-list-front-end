'use strict';

const showGoalsTemplate = require('../templates/goal-listing.handlebars');
const localGoals = require('./localGoals.js');

const getGoalsSuccess = (goals) => {
  $('#content').html(showGoalsTemplate(goals));
};

const postGoalSuccess = (goal) => {
  console.log("New goal: ", goal);
};

const deleteGoalSucess = (goal) => {
  $('')
}


module.exports = {
  getGoalsSuccess,
  postGoalSuccess,
};
