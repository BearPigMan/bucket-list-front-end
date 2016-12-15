'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

const onGetGoals = (e) => {
  e.preventDefault();
  api.getGoals()
    .then(ui.getGoalsSuccess)
    .catch(ui.failure);
};

const onPostGoal = (e) => {
  e.preventDefault();
  api.postGoal()
    .then(ui.postGoalSuccess)
    .catch(ui.failure);
};

const onPatchGoal = (e) => {
  e.preventDefault();
  api.patchGoal()
    .then(ui.patchGoalSuccess)
    .catch(ui.failure);
};

const onDeleteGoal = (e) => {
  e.preventDefault();
  api.deleteGoal()
    .then(ui.deleteGoalSuccess)
    .catch(ui.failure);
};

const addHandlers = () => {
  $('#get-goal-form').on('submit', onGetGoals);
  $('#post-goal-form').on('submit', onPostGoal);

};

module.exports = {
  addHandlers,
};
