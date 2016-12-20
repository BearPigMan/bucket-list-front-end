'use strict';
const store = require('../store');
const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api.js');
const ui = require('./ui.js');

// const localGoals = require('./localGoals.js');

const populateUpdateModal = function(marker) {
  $('.click-title-field').val(marker.data.title);
  $('.click-description-field').val(marker.data.description);
};

const triggerModal = function(marker) {
  marker.addListener('click', function() {
    populateUpdateModal(marker);
    store.currentMarker = marker.id;
    console.log(marker.id);
    $('#click-marker-modal').modal('show');
  });
  return marker;
};

const convertToMarker = function(goal) {
  let marker = new google.maps.Marker({data: goal, id: goal.id, position: goal.position, map: window.map});
  return marker;
};
//
// const addClickHandlers = function(markerGoal) {
//   return triggerModal(markerGoal);
// };

const addToStore = function(markerGoal) {
  store.goals[markerGoal.id] = markerGoal;
  return markerGoal;
};

const convertAndAdd = function(goal) {
  addToStore(triggerModal(convertToMarker(goal)));
};

module.exports = {
  convertAndAdd
};
