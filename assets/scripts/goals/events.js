'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api.js');
const ui = require('./ui.js');
const localGoals = require('./localGoals.js');
const {convertAndAdd} = require('./goalToMarker.js');
const store = require('../store');


const getGoals = () => {
  console.log("cool");
  api.getGoals()
  .then((data) => {
    data.goals.map(convertAndAdd);
    $('.patch-goal-modal-form').on('submit', function(e) {
      e.preventDefault();
      let data = getFormFields(e.target);
      let id = store.currentMarker;
      debugger;
      api.patchGoal(id, data)
        .then(() => {
          localGoals.update(id, data);
        })
        .then(() => {
          // $('.patch-goal-modal-form').off('submit');
          $('#click-marker-modal').modal('hide');
        })
        .catch(ui.failure);
      });
      $('.delete-goal-modal-form').on('submit', function(e) {
        e.preventDefault();
        let id = store.currentMarker;
        api.deleteGoal(id)
          .then(() => {
          store.goals[id].setMap(null);
          // $('.delete-goal-modal-form').off('submit');
        })
        .catch(ui.failure);
        $('#click-marker-modal').modal('hide');
      });
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


const onPatchGoal = (e) => {
  e.preventDefault();
  let data = getFormFields(e.target);
  // pull id data attribute from form
  let id = $(e.target).data('id');
  api.patchGoal(id, data).then(ui.patchGoalSuccess).catch(ui.failure);
};

const onSignOut = () => {
  localGoals.clearAll();
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
  onSignOut,
  // onPatchGoal,
  onDeleteGoal
};
