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
  // pull id data attribute from form
  let id = $(e.target).data('id');
  api.patchGoal(id, data)
    .then(ui.patchGoalSuccess)
    .catch(ui.failure);
};

const onDeleteGoal = (e) => {
  e.preventDefault();
  let id = $(e.target).data('id');
  api.deleteGoal(id)
    .then(ui.deleteGoalSuccess)
    .catch(ui.failure);
};

const addHandlers = () => {
  $('#get-goal-form').on('submit', onGetGoals);
  $('#post-goal-form').on('submit', onPostGoal);
  $('#content').on('submit', '.patch-goal-form', onPatchGoal);
  $('#content').on('click', '.delete-goal', onDeleteGoal);

};

module.exports = {
  addHandlers,
};
