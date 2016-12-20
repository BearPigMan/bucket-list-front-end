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
    .catch(ui.patchFailure);
  };

const getGoals = () => {
  api.getGoals()
  .then((data) => {
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
  api.postGoal(data).then((data) => localGoals.create(data.goal)).catch(ui.postFailure);
};

const onSignOut = () => {
  localGoals.clearAll();
  // $('.create-title-field').val('');
  // $('.create-description-field').val('');
  // $('.click-title-field').val('');
  // $('.click-description-field').val('');
};

const onSubmit = function(e, coords) {
  e.preventDefault();
  onPostGoal(e, coords);
  $(e.target).off('submit');
  $('.create-title-field').val('');
  $('.create-description-field').val('');
  $('#create-marker-modal').modal('hide');
};

const onMapClick = function(event) {
  let coords = {
    lat: event.latLng.lat(),
    lng: event.latLng.lng()
  };
  $('#create-marker-modal').modal().find('form').on('submit', (e) => {
    onSubmit(e, coords);
  });
};

const offMapClick = function() {
  google.maps.event.removeListener(mapListener);
  $('.patch-goal-modal-form').off('submit');
  $('.delete-goal-modal-form').off('submit');
};

const addHandlers = () => {
  window.mapListener = map.addListener('click', onMapClick);
  // set up click handler for submit button on update modal
  $('.patch-goal-modal-form').on('submit', onPatchGoal);
  $('.delete-goal-modal-form').on('submit', onDeleteGoal);
};

module.exports = {
  addHandlers,
  getGoals,
  onPostGoal,
  onSignOut,
  onMapClick,
  offMapClick
};
