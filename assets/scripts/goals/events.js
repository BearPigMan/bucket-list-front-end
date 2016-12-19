'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api.js');
const ui = require('./ui.js');
const localGoals = require('./localGoals.js');

const getGoals = () => {
  console.log("cool");
  api.getGoals().then(localGoals.storeAll).catch(ui.failure);
};

const onPostGoal = (e, coords) => {
  e.preventDefault();
  let data = getFormFields(e.target);
  data.goal.position = coords;
  api.postGoal(data).then((data) => localGoals.create(data.goal)).catch(ui.failure);
};


const onPatchGoal = (e) => {
  e.preventDefault();
  let data = getFormFields(e.target);
  // pull id data attribute from form
  let id = $(e.target).data('id');
  api.patchGoal(id, data).then(ui.patchGoalSuccess).catch(ui.failure);
};

// const onPatchGoal = (e) => {
//   e.preventDefault();
//   let data = getFormFields(e.target);
//   // pull id data attribute from form
//   let id = $(e.target).data('id');
//   api.patchGoal(id, data).then(ui.patchGoalSuccess).catch(ui.failure);
// };


const onDeleteGoal = (e) => {
  e.preventDefault();
  let id = $(e.target).data('id');
  api.deleteGoal(id).then(ui.deleteGoalSuccess).catch(ui.failure);
};

const addHandlers = () => {
  // $('#get-goal-form').on('submit', onGetGoals);
  // $('#post-goal-form').on('submit', onPostGoal);
  // $('#content').on('submit', '.patch-goal-form', onPatchGoal);
  // $('#content').on('click', '.delete-goal', onDeleteGoal);
  // $('.patch-goal-modal-form').on('submit', onPatchGoal);
  // $('.delete-goal-modal-form').on('submit', onDeleteGoal);
};

module.exports = {
  addHandlers,
  getGoals,
  onPostGoal,
  // onPatchGoal,
  onDeleteGoal
};
