'use strict';

const showGoalsTemplate = require('../templates/goal-listing.handlebars');
const localGoals = require('./localGoals.js');

const getGoalsSuccess = (goals) => {
  console.log("goals are: ", localGoals.showAll());
  $('#content').html(showGoalsTemplate(goals));
};

const postGoalSuccess = (goal) =>
{
  console.log("---this is post goal success--- and goal is: ", goal);
  $('#content').html()
};



module.exports = {
  getGoalsSuccess,
};
