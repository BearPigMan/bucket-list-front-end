'use strict';

const showGoalsTemplate = require('../templates/goal-listing.handlebars');

const getGoalsSuccess = (goals) => {
  console.log("goals are: ", goals);
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
