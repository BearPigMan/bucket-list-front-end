'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api.js');
const ui = require('./ui.js');
const localGoals = require('./localGoals.js');
const {convertAndAdd} = require('./goalToMarker.js');
const store = require('../store');

const onDeleteGoal = function(e) {
  e.preventDefault();
  let id = store.currentMarker;
  api.deleteGoal(id)
    .then(() => {
      store.goals[id].setMap(null);
    })
    .catch(ui.failure);
  $('#click-marker-modal').modal('hide');
};

const onPatchGoal =function(e) {
  e.preventDefault();
  let data = getFormFields(e.target);
  let id = store.currentMarker;
  api.patchGoal(id, data)
    .then(() => {
      localGoals.update(id, data);
      $('#click-marker-modal').modal('hide');
    })
    .catch(ui.failure);
  };

const getGoals = () => {
  console.log("cool");
  api.getGoals()
  .then((data) => {
    // add goals to map and local storage, set click handler on map
    data.goals.map(convertAndAdd);

    // set up click handler for submit button on update modal
    $('.patch-goal-modal-form').on('submit', onPatchGoal);
      // set up click handler for delete button on update modal
      $('.delete-goal-modal-form').on('submit', onDeleteGoal);
    return localGoals.showAll();
  })
  .catch(ui.failure);
};

const onPostGoal = (e, coords) => {
  e.preventDefault();
  let data = getFormFields(e.target);
  data.goal.position = coords;
  api.postGoal(data).then((data) => localGoals.create(data.goal)).catch(ui.failure);
};

const onSignOut = () => {
  localGoals.clearAll();
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
  onSignOut,
  // onPatchGoal,
  onDeleteGoal
};
