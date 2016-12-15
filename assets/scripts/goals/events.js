'use strict';

const getFormFields = require('../../../lib/get-form-fields');
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
  let data = getFormFields(e.target);
  api.postGoal(data)
    .then(ui.postGoalSuccess)
    .catch(ui.failure);
};

const onPatchGoal = (e) => {
  e.preventDefault();
  let data = getFormFields(e.target);
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
