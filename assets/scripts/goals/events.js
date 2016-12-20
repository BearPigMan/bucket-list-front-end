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
    // grab postition of first goal and center map there
    let firstPosition = Object.values(localGoals.showAll())[0].data.position;
    map.setCenter(firstPosition);
    return localGoals.showAll();
  })
  .catch(ui.failure);
};

const onPostGoal = (e, coords) => {
  e.preventDefault();
  let data = getFormFields(e.target);
  data.goal.position = coords;
  debugger;
  api.postGoal(data).then((data) => localGoals.create(data.goal)).catch(ui.failure);
};

const onSignOut = () => {
  localGoals.clearAll();
};

const onMapClick = function(event) {
  let coords = {
    lat: event.latLng.lat(),
    lng: event.latLng.lng()
  };
  $('#create-marker-modal').modal().find('form').on('submit', (e) => {
    onPostGoal(e, coords);
    console.log(e);
    $(e.target).off('submit');
    $('.create-title-field').val('');
    $('.create-description-field').val('');
    $('#create-marker-modal').modal('hide');
  });
};

const addHandlers = () => {
  map.addListener('click', onMapClick);
  // set up click handler for submit button on update modal
  $('.patch-goal-modal-form').on('submit', onPatchGoal);
  // set up click handler for delete button on update modal
  $('.delete-goal-modal-form').on('submit', onDeleteGoal);
};

module.exports = {
  addHandlers,
  getGoals,
  onPostGoal,
  onSignOut,
  onMapClick
};
